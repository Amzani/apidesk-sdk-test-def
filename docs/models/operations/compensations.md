# Compensations

## Example Usage

```typescript
import { Compensations } from "apideck/models/operations";

let value: Compensations = {
  employeeId: "12345",
  netPay: 2199.93,
  grossPay: 3000,
  taxes: [
    {
      name: "CA State Income Tax",
      employer: false,
      amount: 1.97,
    },
  ],
  deductions: [
    {
      name: "Company Car",
      amount: 10.97,
    },
  ],
  benefits: [
    {
      name: "Health Insurance",
      employeeDeduction: 142.94,
      employerContribution: 141.14,
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `employeeId`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | A unique identifier for an object.                                       | 12345                                                                    |
| `netPay`                                                                 | *number*                                                                 | :heavy_minus_sign:                                                       | The employee's net pay. Only available when payroll has been processed   | 2199.93                                                                  |
| `grossPay`                                                               | *number*                                                                 | :heavy_minus_sign:                                                       | The employee's gross pay. Only available when payroll has been processed | 3000                                                                     |
| `taxes`                                                                  | [operations.Taxes](../../models/operations/taxes.md)[]                   | :heavy_minus_sign:                                                       | An array of employer and employee taxes for the pay period.              |                                                                          |
| `deductions`                                                             | [operations.Deductions](../../models/operations/deductions.md)[]         | :heavy_minus_sign:                                                       | An array of employee deductions for the pay period.                      |                                                                          |
| `benefits`                                                               | [operations.Benefits](../../models/operations/benefits.md)[]             | :heavy_minus_sign:                                                       | An array of employee benefits for the pay period.                        |                                                                          |