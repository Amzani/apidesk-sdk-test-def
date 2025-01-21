# ListCompaniesResponseType

Indicates the type of website, such as 'main', 'blog', or 'support'. This string helps categorize the website's purpose or function within the company's digital ecosystem. It is optional and may be omitted if the type is not specified.

## Example Usage

```typescript
import { ListCompaniesResponseType } from "apideck/models/components";

let value: ListCompaniesResponseType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "other"
```