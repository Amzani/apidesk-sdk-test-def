# ListCompaniesResponseAccountType

Specifies the type of bank account associated with the company, such as 'savings', 'checking', or 'business'. This string value helps categorize the account, influencing factors like transaction limits and applicable interest rates. Understanding the account type is crucial for financial operations and reporting within the CRM system.

## Example Usage

```typescript
import { ListCompaniesResponseAccountType } from "apideck/models/components";

let value: ListCompaniesResponseAccountType = "credit_card";
```

## Values

```typescript
"bank_account" | "credit_card" | "other"
```