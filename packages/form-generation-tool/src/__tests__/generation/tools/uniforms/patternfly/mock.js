"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmTravelSchema = exports.ApplyForVisaSchema = void 0;
exports.ApplyForVisaSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    traveller: {
      type: "object",
      properties: {
        address: {
          type: "object",
          properties: {
            city: { type: "string" },
            country: { type: "string" },
            street: { type: "string" },
            zipCode: { type: "string" },
          },
        },
        email: { type: "string" },
        firstName: { type: "string" },
        lastName: { type: "string" },
        nationality: { type: "string" },
      },
      input: true,
    },
    trip: {
      type: "object",
      properties: {
        begin: { type: "string", format: "date-time" },
        city: { type: "string" },
        country: { type: "string" },
        end: { type: "string", format: "date-time" },
        visaRequired: { type: "boolean" },
      },
      input: true,
    },
    visaApplication: {
      type: "object",
      properties: {
        approved: { type: "boolean" },
        city: { type: "string" },
        country: { type: "string" },
        duration: { type: "integer" },
        firstName: { type: "string" },
        lastName: { type: "string" },
        nationality: { type: "string" },
        passportNumber: { type: "string" },
      },
      output: true,
    },
  },
};
exports.ConfirmTravelSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    flight: {
      type: "object",
      properties: {
        arrival: {
          type: "string",
          format: "date-time",
        },
        departure: {
          type: "string",
          format: "date-time",
        },
        flightNumber: {
          type: "string",
        },
        gate: {
          type: "string",
        },
        seat: {
          type: "string",
        },
      },
      input: true,
    },
    hotel: {
      type: "object",
      properties: {
        address: {
          type: "object",
          properties: {
            city: {
              type: "string",
            },
            country: {
              type: "string",
            },
            street: {
              type: "string",
            },
            zipCode: {
              type: "string",
            },
          },
        },
        bookingNumber: {
          type: "string",
        },
        name: {
          type: "string",
        },
        phone: {
          type: "string",
        },
        room: {
          type: "string",
        },
      },
      input: true,
    },
  },
};
//# sourceMappingURL=mock.js.map
