# UpdateContactRequestGender

The gender of the contact, which can be used for demographic analysis and personalized communication. This optional field should be a string value, typically 'Male', 'Female', or other gender identities as applicable. Providing this information can help tailor interactions and improve user experience.

## Example Usage

```typescript
import { UpdateContactRequestGender } from "apideck/models/components";

let value: UpdateContactRequestGender = "female";
```

## Values

```typescript
"male" | "female" | "unisex"
```