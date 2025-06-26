# Validações de Request

Este guia mostra como aplicar validações automáticas em campos do corpo da requisição (DTOs) usando **Jakarta Bean Validation** no Spring Boot. Inclui campos comuns, datas, formatos personalizados e validações condicionais.

---

## 🧩 Como validar DTOs no Spring Boot

1. Adicione as anotações de validação nos campos do DTO
2. Use `@Valid` no `@RequestBody` do controller
3. Opcional: use `@ControllerAdvice` para personalizar mensagens de erro

---

## 📌 Validações comuns por tipo

### ✅ String

| Anotação           | Descrição                                |
|--------------------|-------------------------------------------|
| `@NotBlank`        | Não pode ser nulo, vazio ou só espaços    |
| `@NotEmpty`        | Não pode ser nulo ou vazio                |
| `@Size(min, max)`  | Tamanho mínimo e máximo                   |
| `@Pattern(regexp)` | Expressão regular                         |
| `@Email`           | Valida email                              |
| `@URL`             | Valida URL (Hibernate Validator)          |

```java
@NotBlank
@Size(min = 3, max = 30)
private String nome;

@Email
private String email;

@Pattern(regexp = "\d{11}")
private String cpf;
```

---

### ✅ Números

| Anotação             | Descrição                         |
|----------------------|------------------------------------|
| `@Min(valor)`        | Valor mínimo                      |
| `@Max(valor)`        | Valor máximo                      |
| `@Positive`          | Maior que zero                    |
| `@PositiveOrZero`    | Maior ou igual a zero             |
| `@Negative`          | Menor que zero                    |
| `@NegativeOrZero`    | Menor ou igual a zero             |
| `@Digits(int, int)`  | Casas inteiras e decimais         |

```java
@Min(18)
@Max(99)
private int idade;

@Positive
private BigDecimal salario;
```

---

### ✅ Datas (`LocalDate`, `LocalDateTime`)

| Anotação            | Descrição                        |
|---------------------|-----------------------------------|
| `@Past`             | Data no passado                  |
| `@Future`           | Data no futuro                   |
| `@PastOrPresent`    | Passado ou hoje                  |
| `@FutureOrPresent`  | Futuro ou hoje                   |

```java
@Past
@JsonFormat(pattern = "dd/MM/yyyy")
private LocalDate dataNascimento;

@Future
@JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
private LocalDateTime agendamento;
```

Exemplo de JSON:
```json
{
  "dataNascimento": "10/05/1990",
  "agendamento": "25/07/2025 14:30:00"
}
```

---

### ✅ Boolean

| Anotação         | Descrição                  |
|------------------|-----------------------------|
| `@AssertTrue`    | Deve ser `true`             |
| `@AssertFalse`   | Deve ser `false`            |

```java
@AssertTrue(message = "Você deve aceitar os termos")
private Boolean aceitouTermos;
```

---

### ✅ Coleções e Arrays

| Anotação         | Descrição                    |
|------------------|-------------------------------|
| `@NotEmpty`      | Lista/array/map não pode estar vazia |
| `@Size(min, max)`| Tamanho da coleção           |

```java
@NotEmpty
@Size(min = 1, max = 5)
private List<@NotBlank String> telefones;
```

---

## 🛠️ Tratando erros de validação

```java
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationErrors(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error ->
            errors.put(error.getField(), error.getDefaultMessage()));
        return ResponseEntity.badRequest().body(errors);
    }
}
```

---

## 🧪 Validações personalizadas

### ✅ 1. Exemplo: Validação de CPF

#### Annotation personalizada:

```java
@Documented
@Constraint(validatedBy = CpfValidator.class)
@Target({ ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
public @interface CPF {
    String message() default "CPF inválido";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
```

#### Validador:

```java
public class CpfValidator implements ConstraintValidator<CPF, String> {
    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return value != null && value.matches("\d{11}");
    }
}
```

#### Uso no DTO:

```java
@CPF
private String cpf;
```

---

### ✅ 2. Validação condicional entre dois campos

#### Objetivo: `dataFim` deve ser maior que `dataInicio`

#### Annotation:

```java
@Documented
@Constraint(validatedBy = DataFimDepoisDeInicioValidator.class)
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface DataFimDepoisDeInicio {
    String message() default "A data de fim deve ser posterior à data de início";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
```

#### Validador:

```java
public class DataFimDepoisDeInicioValidator implements ConstraintValidator<DataFimDepoisDeInicio, Object> {
    @Override
    public boolean isValid(Object obj, ConstraintValidatorContext context) {
        if (obj instanceof ReservaRequest request) {
            LocalDate inicio = request.getDataInicio();
            LocalDate fim = request.getDataFim();
            if (inicio == null || fim == null) return true;
            return fim.isAfter(inicio);
        }
        return true;
    }
}
```

#### DTO com validação:

```java
@DataFimDepoisDeInicio
public class ReservaRequest {

    @NotNull
    private LocalDate dataInicio;

    @NotNull
    private LocalDate dataFim;

    // outros campos
}
```

#### Exemplo de JSON válido:

```json
{
  "dataInicio": "2025-07-01",
  "dataFim": "2025-07-05"
}
```

---

## ✅ Conclusão

Com Jakarta Bean Validation, é possível validar praticamente qualquer tipo de dado em seu DTO sem precisar escrever `if` manualmente. Além disso, você pode criar validações customizadas para regras de negócio específicas.

---

## 🗂️ Extras

- `@CNPJ` customizado
- Validação de campos dependentes (ex: "se tipo == PJ, exigir cnpj")

---
