# ContactValue

Contains the value of a custom field associated with the contact. This field allows for additional, user-defined information to be stored and retrieved, enhancing the flexibility of the contact's data profile. The format of this value can vary depending on the custom field's configuration.


## Supported Types

### `string`

```typescript
const value: string = "Uses Salesforce and Marketo";
```

### `number`

```typescript
const value: number = 10;
```

### `boolean`

```typescript
const value: boolean = true;
```

### `components.ContactValue4`

```typescript
const value: components.ContactValue4 = {};
```

### `string[]`

```typescript
const value: string[] = [
  "<value>",
];
```

### `components.ContactValue6[]`

```typescript
const value: components.ContactValue6[] = [
  {},
];
```

