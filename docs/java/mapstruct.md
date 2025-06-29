# MapStruct

## 📌 Introdução

### O que é o MapStruct?
MapStruct é um framework Java para mapeamento de objetos (beans) que permite transformar entidades em DTOs e vice-versa de forma eficiente, segura e com geração de código em tempo de compilação.

### 🚀 Vantagens
- Geração de código em **tempo de compilação** (não usa reflexão)
- Alto desempenho
- Integração com Spring (`@Component`)
- Suporte a conversão de listas, enums, objetos aninhados, builders, etc.

## ⚙️ Configuração

### 🛠 Dependências no Maven

```xml
<dependencies>
  <dependency>
    <groupId>org.mapstruct</groupId>
    <artifactId>mapstruct</artifactId>
    <version>1.5.5.Final</version>
  </dependency>
</dependencies>

<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-compiler-plugin</artifactId>
      <version>3.11.0</version>
      <configuration>
        <source>21</source>
        <target>21</target>
        <annotationProcessorPaths>
          <path>
            <groupId>org.mapstruct</groupId>
            <artifactId>mapstruct-processor</artifactId>
            <version>1.5.5.Final</version>
          </path>
        </annotationProcessorPaths>
      </configuration>
    </plugin>
  </plugins>
</build>
```

## ✍️ Uso Básico

### 1. Criação de um Mapper

```java
@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDTO toDTO(User entity);
    User toEntity(UserDTO dto);
}
```

> Será gerado automaticamente um `UserMapperImpl` com a lógica de conversão.

---

### 2. Mapeando nomes diferentes

```java
@Mapping(source = "nome", target = "fullName")
UserDTO toDTO(User user);
```

---

### 3. Mapeando listas

```java
List<UserDTO> toDTOList(List<User> users);
```

---

### 4. Mapeando objetos aninhados

```java
@Mapping(source = "endereco.rua", target = "rua")
ClienteDTO toDTO(Cliente cliente);
```

---

### 5. Mapeamento reverso automático

```java
@InheritInverseConfiguration
User toEntity(UserDTO dto);
```


## 🔄 Estratégias do MapStruct

### 1. Naming Strategy

Controla a conversão entre estilos de nomes (`snake_case` ↔ `camelCase`).

```java
@Mapper(namingStrategy = "org.mapstruct.ap.spi.DefaultNamingStrategy")
```

---

### 2. Collection Mapping Strategy

Define como coleções são manipuladas.

```java
@Mapper(collectionMappingStrategy = CollectionMappingStrategy.ADDER_PREFERRED)
```

---

### 3. Builder Strategy

Para objetos com builder (como Lombok):

```java
@Mapper(builder = @Builder(disableBuilder = false))
```

---

### 4. Null Value Mapping Strategy

Controla como `null` será tratado:

```java
@Mapper(nullValueMappingStrategy = NullValueMappingStrategy.RETURN_DEFAULT)
```

---

### 5. Enum Mapping Strategy

Mapeamento automático ou manual de enums:

```java
@ValueMapping(source = "OLD", target = "LEGACY")
TargetEnum map(SourceEnum source);
```

---

### 6. Unmapped Target Policy

Define o que fazer com campos não mapeados:

```java
@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
```

---

### 7. Injeção de Mapper

Define como será instanciado:

- `spring`
- `default`
- `cdi`
- `jsr330`

---

## 🧠 Estratégias Avançadas

### 1. NullValueCheckStrategy

Controla **quando** o MapStruct deve verificar se um valor de origem é `null` antes de realizar o mapeamento ou chamada de método auxiliar.

Tipos disponíveis:
- `ALWAYS`
- `ON_IMPLICIT_CONVERSION` (padrão)

##### 🔹 ON_IMPLICIT_CONVERSION *(padrão)*

- **Descrição**: Adiciona verificação de `null` **somente** quando o MapStruct realiza uma conversão de tipo implícita (ex: `LocalDate → String`, `Integer → Long`).
- **Comportamento**:  
  - Se não há conversão, não há `if (obj != null)`.
  - Gera código mais enxuto.

- **Quando usar**:
  - Deseja que `null` só seja tratado se necessário.
  - Código mais limpo.

##### 🔹 ALWAYS
  
  - **Descrição**: Sempre gera um `if (source != null)` antes de qualquer operação de mapeamento.
- **Comportamento**:  
  - Garante segurança contra `NullPointerException`.
  - Adiciona verificação mesmo se tipos forem iguais.

- **Quando usar**:
  - Deseja evitar `NullPointerException`.
  - Mapeamento de valores opcionais.
  - Mapeamentos com métodos auxiliares personalizados.

#### 🛠 Como configurar
- **Por campo**:
  ```java
  @Mapping(target = "nome", source = "origem.nome", nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
  ```

- **No nível do mapper**:
  ```java
  @Mapper(nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
  public interface MeuMapper { ... }
  ```
#### Ressultado
```java
if (source.getNome() != null) {
    target.setNome(source.getNome());
}
```
> ⚠️ Observações Importantes Diferente de `NullValueMappingStrategy`:
`NullValueCheckStrategy` controla verificações de null durante o mapeamento.
`NullValueMappingStrategy` define o comportamento para coleções/arrays nulos.

> 💡 Combine com `NullValuePropertyMappingStrategy` ou `NullValueMappingStrategy` para controle completo sobre `null`.

```Java
@Mapper(
    componentModel = "spring",
    nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE, // ignora propriedades null ao atualizar
    nullValueMappingStrategy = NullValueMappingStrategy.RETURN_DEFAULT          // retorna lista vazia, objeto vazio etc.
)
public interface MeuMapper {}
```

---

### 2. CollectionMappingStrategy
O `CollectionMappingStrategy` define como o MapStruct deve lidar com coleções (como `List`, `Set`, `Map`) ao mapear entre objetos. Abaixo estão os valores possíveis e suas explicações detalhadas:


Tipos disponíveis:
- `ACCESSOR_ONLY`
- `SETTER_PREFERRED` (padrão)
- `ADDER_PREFERRED`
- `TARGET_IMMUTABLE`

#### 🔹 ACCESSOR_ONLY

**Descrição**:  
Usa apenas o método `getter` para acessar a coleção de destino. Não chama `set` nem `add`.

**Uso típico**:  
- Quando a coleção já está inicializada internamente.
- Evita a substituição da instância da coleção.

```java
public class Target {
    private final List<String> items = new ArrayList<>();

    public List<String> getItems() {
        return items;
    }
}
```

---

#### 🔹 SETTER_PREFERRED *(padrão)*

**Descrição**:  
Prefere usar o método `setter` para definir a coleção inteira no destino.

**Uso típico**:  
- Quando deseja substituir completamente a coleção.

```java
public class Target {
    private List<String> items;

    public void setItems(List<String> items) {
        this.items = items;
    }
}
```

---

#### 🔹 ADDER_PREFERRED

**Descrição**:  
Prefere usar métodos do tipo `addItem(...)` para adicionar elementos à coleção individualmente.

**Uso típico**:  
- Quando deseja construir a coleção gradualmente.
- Quando usa builders ou padrões que não permitem `set`.

```java
public class Target {
    private List<String> items = new ArrayList<>();

    public void addItem(String item) {
        items.add(item);
    }
}
```

---

#### 🔹 TARGET_IMMUTABLE

**Descrição**:  
Assume que o destino é imutável. Cria nova instância do objeto de destino com as coleções preenchidas.

**Uso típico**:  
- Quando o destino é `record`, usa builder ou é imutável.

```java
public record Target(List<String> items) { }
```

---

#### 🛠 Como configurar

```java
@Mapper(collectionMappingStrategy = CollectionMappingStrategy.ADDER_PREFERRED)
public interface MeuMapper { ... }
```

Ou com `@MapperConfig`:

```java
@MapperConfig(collectionMappingStrategy = CollectionMappingStrategy.TARGET_IMMUTABLE)
public interface GlobalConfig { }
```

---

### 3. nullValuePropertyMappingStrategy
Determina o que fazer quando o valor de origem é null ao mapear uma propriedade simples (como `String`, `Integer`, `Boolean`, etc.).

Tipos disponíveis:
- `SET_TO_NULL` (padrão)
- `IGNORE`

#### 🔹 SET_TO_NULL *(padrão)*

- Define explicitamente `null` no destino.
- Exemplo:
  ```java
  // origem.nome == null → destino.nome == null
  ```

---

#### 🔹 IGNORE

- Ignora a propriedade se o valor da origem for `null`. O campo no destino permanece como está.
- Exemplo:
  ```java
  // origem.nome == null → destino.nome não é alterado
  ```

- Ideal para:
  - Atualizações parciais (ex: PATCH)
  - Preservar dados existentes

---

#### 🛠 Como configurar

- **Por campo**:
  ```java
  @Mapping(target = "nome", source = "origem.nome", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
  ```

- **No nível do mapper**:
  ```java
  @Mapper(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
  public interface MeuMapper { ... }
  ```

- **Configuração global**:
  ```java
  @MapperConfig(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
  public interface ConfigGlobal { }
  ```

> Essa estratégia afeta apenas propriedades escalares. Para coleções, use `NullValueMappingStrategy`.
---

### 4. NullValueMappingStrategy

Define o comportamento do MapStruct quando encontra valores `null` na origem durante o mapeamento de coleções ou arrays.

Tipos disponíveis:
- `RETURN_NULL` (padrão)
- `RETURN_DEFAULT`

##### 🔹 RETURN_NULL *(padrão)*

- **Descrição**: Retorna `null` se o valor da origem for `null`.
- **Quando usar**: Se deseja preservar `null` no objeto de destino.
- **Exemplo**:
  ```java
  // origem.lista == null → destino.lista == null
  ```

##### 🔹 RETURN_DEFAULT

- **Descrição**: Retorna um valor padrão se o valor da origem for `null`.
- **Valores retornados**:
  - Lista/Set → `Collections.emptyList()` / `emptySet()`
  - Array → `new Tipo[0]`
  - Map → `Collections.emptyMap()`
  - Primitivos → `0`, `false`, etc.
- **Quando usar**: Para evitar `NullPointerException` ou garantir coleções nunca nulas.
- **Exemplo**:
  ```java
  // origem.lista == null → destino.lista == []
  ```

Esta estratégia aplica-se apenas a **coleções e arrays**.  
Para valores escalares (`String`, `Integer`, etc.).

## 🧩 Recursos Avançados
### 1. @Context

Usado para passar objetos auxiliares (como serviços ou helpers) que podem ser usados dentro dos métodos de mapeamento.

```java
@Mapper
public interface MeuMapper {
    Target map(Source source, @Context CycleAvoidingContext context);
}
```

### 2. @MapMapping

Usado para mapear `Map<K, V>` onde a conversão das chaves e valores também precisa ser tratada:

```java
@MapMapping(keyTargetType = "java.lang.String", valueTargetType = "java.lang.Integer")
Map<String, Integer> convert(Map<Long, String> source);
```

### 3. Conversão de Datas e Horas

MapStruct pode converter formatos de datas utilizando o `java.time.format.DateTimeFormatter` com `@Mapping`:

```java
@Mapping(target = "date", source = "date", dateFormat = "dd/MM/yyyy")
Target map(Source source);
```

Ou com métodos auxiliares:

```java
default String format(LocalDate date) {
    return date.format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
}
```
### 4. @MappingTarget

Permite atualizar um objeto existente em vez de criar um novo:

```java
void update(@MappingTarget Target target, Source source);
```


## 🧪 Testando o Mapper

```java
@SpringBootTest
public class UserMapperTest {

    @Autowired
    UserMapper mapper;

    @Test
    void testMapping() {
        User user = new User("Ana", "ana@email.com");
        UserDTO dto = mapper.toDTO(user);
        assertEquals("Ana", dto.getFullName());
    }
}
```

---


## 📚 Referências
- [Documentação Oficial do MapStruct](https://mapstruct.org/)
- [Exemplos no GitHub](https://github.com/mapstruct/mapstruct-examples)