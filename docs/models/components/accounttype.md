# AccountType

The classification of the company's bank account, such as checking or savings. This property helps determine the account's features and limitations. Ensure the account type is specified accurately to avoid transaction issues.

## Example Usage

```typescript
import { AccountType } from "apideck/models/components";

let value: AccountType = "credit_card";
```

## Values

```typescript
"bank_account" | "credit_card" | "other"
```