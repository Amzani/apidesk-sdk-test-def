<!-- Start SDK Example Usage [usage] -->
```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.hris.employees.list({
    serviceId: "salesforce",
    filter: {
      companyId: "1234",
      email: "elon@tesla.com",
      firstName: "Elon",
      title: "Manager",
      lastName: "Musk",
      managerId: "1234",
      employmentStatus: "active",
      employeeNumber: "123456-AB",
      departmentId: "1234",
    },
    sort: {
      by: "created_at",
      direction: "desc",
    },
    passThrough: {
      "search": "San Francisco",
    },
    fields: "id,updated_at",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End SDK Example Usage [usage] -->