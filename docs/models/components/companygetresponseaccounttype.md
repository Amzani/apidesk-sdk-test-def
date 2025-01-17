# CompanyGetResponseAccountType

Specifies the category of the bank account, such as 'savings', 'checking', or 'business'. This information is important for determining the nature of transactions that can be performed and may affect transaction limits and fees. Understanding the account type helps in aligning the company's financial operations with its banking capabilities.

## Example Usage

```typescript
import { CompanyGetResponseAccountType } from "apideck/models/components";

let value: CompanyGetResponseAccountType = "credit_card";
```

## Values

```typescript
"bank_account" | "credit_card" | "other"
```