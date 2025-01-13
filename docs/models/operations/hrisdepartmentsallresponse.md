# HrisDepartmentsAllResponse

## Example Usage

```typescript
import { HrisDepartmentsAllResponse } from "apideck/models/operations";

let value: HrisDepartmentsAllResponse = {
  result: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `result`                                      | *operations.HrisDepartmentsAllResponseResult* | :heavy_check_mark:                            | N/A                                           |