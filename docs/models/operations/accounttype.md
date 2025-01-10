# AccountType

Specifies the category of the bank account, such as 'checking', 'savings', or 'business'. This information helps in identifying the nature of the account and may influence transaction processing rules and fees. Understanding the account type is crucial for financial planning and integration with other financial services.

## Example Usage

```typescript
import { AccountType } from "apideck/models/operations";

let value: AccountType = "credit_card";
```

## Values

```typescript
"bank_account" | "credit_card" | "other"
```