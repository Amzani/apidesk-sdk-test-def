# CompaniesAddType

Specifies the category or classification of the address, such as 'billing', 'shipping', or 'office'. This helps in distinguishing between different address purposes within the CRM system, ensuring that communications and shipments are directed appropriately. While not mandatory, providing this information can enhance the accuracy of address-related operations.

## Example Usage

```typescript
import { CompaniesAddType } from "apideck/models/operations";

let value: CompaniesAddType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```