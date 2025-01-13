# HrisEmployeesAllResponse

## Example Usage

```typescript
import { HrisEmployeesAllResponse } from "apideck/models/operations";

let value: HrisEmployeesAllResponse = {
  result: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: {
      "missing": [
        {
          "x-apideck-consumer-id": "required",
        },
      ],
    },
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `result`                                    | *operations.HrisEmployeesAllResponseResult* | :heavy_check_mark:                          | N/A                                         |