# ActivitiesSort

## Example Usage

```typescript
import { ActivitiesSort } from "apideck/models/components";

let value: ActivitiesSort = {
  by: "created_at",
  direction: "desc",
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         | Example                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `by`                                                                                                                                                                | [components.ActivitiesSortBy](../../models/components/activitiessortby.md)                                                                                          | :heavy_minus_sign:                                                                                                                                                  | The field on which to sort the activities. This property specifies the attribute used for sorting, such as 'date' or 'type', to arrange the activities accordingly. | created_at                                                                                                                                                          |
| `direction`                                                                                                                                                         | [components.ActivitiesSortDirection](../../models/components/activitiessortdirection.md)                                                                            | :heavy_minus_sign:                                                                                                                                                  | The direction in which to sort the results. Use 'asc' for ascending or 'desc' for descending order to control the sequence of the returned activities.              |                                                                                                                                                                     |