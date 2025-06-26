# MapStruct

O **MapStruct** é um framework Java para mapeamento de objetos (beans) que permite transformar entidades em DTOs e vice-versa de forma eficiente, segura e com geração de código em tempo de compilação.

---

## 📌 O que é o MapStruct?

MapStruct é um processador de anotações que gera implementações de mapeamentos entre classes Java. Ele é rápido, seguro e elimina a necessidade de escrever código repetitivo para conversão de objetos.

---

## 🚀 Vantagens

- Geração de código em **tempo de compilação** (não usa reflexão)
- Alto desempenho
- Integração com Spring (`@Component`)
- Suporte a conversão de listas, enums, objetos aninhados, builders, etc.

---

## ⚙️ Como configurar o MapStruct

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

---

## ✍️ Como usar o MapStruct

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

---

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