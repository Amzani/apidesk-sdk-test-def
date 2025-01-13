# WorkPattern

## Example Usage

```typescript
import { WorkPattern } from "apideck/models/operations";

let value: WorkPattern = {
  oddWeeks: {
    hoursMonday: 8,
    hoursTuesday: 8,
    hoursWednesday: 4,
    hoursThursday: 7.5,
    hoursFriday: 4,
    hoursSaturday: 0,
    hoursSunday: 0,
  },
  evenWeeks: {
    hoursMonday: 8,
    hoursTuesday: 8,
    hoursWednesday: 4,
    hoursThursday: 7.5,
    hoursFriday: 4,
    hoursSaturday: 0,
    hoursSunday: 0,
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `oddWeeks`                                                   | [operations.OddWeeks](../../models/operations/oddweeks.md)   | :heavy_minus_sign:                                           | N/A                                                          |
| `evenWeeks`                                                  | [operations.EvenWeeks](../../models/operations/evenweeks.md) | :heavy_minus_sign:                                           | N/A                                                          |