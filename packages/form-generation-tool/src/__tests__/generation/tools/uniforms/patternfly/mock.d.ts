export declare const ApplyForVisaSchema: {
  $schema: string;
  type: string;
  properties: {
    traveller: {
      type: string;
      properties: {
        address: {
          type: string;
          properties: {
            city: {
              type: string;
            };
            country: {
              type: string;
            };
            street: {
              type: string;
            };
            zipCode: {
              type: string;
            };
          };
        };
        email: {
          type: string;
        };
        firstName: {
          type: string;
        };
        lastName: {
          type: string;
        };
        nationality: {
          type: string;
        };
      };
      input: boolean;
    };
    trip: {
      type: string;
      properties: {
        begin: {
          type: string;
          format: string;
        };
        city: {
          type: string;
        };
        country: {
          type: string;
        };
        end: {
          type: string;
          format: string;
        };
        visaRequired: {
          type: string;
        };
      };
      input: boolean;
    };
    visaApplication: {
      type: string;
      properties: {
        approved: {
          type: string;
        };
        city: {
          type: string;
        };
        country: {
          type: string;
        };
        duration: {
          type: string;
        };
        firstName: {
          type: string;
        };
        lastName: {
          type: string;
        };
        nationality: {
          type: string;
        };
        passportNumber: {
          type: string;
        };
      };
      output: boolean;
    };
  };
};
export declare const ConfirmTravelSchema: {
  $schema: string;
  type: string;
  properties: {
    flight: {
      type: string;
      properties: {
        arrival: {
          type: string;
          format: string;
        };
        departure: {
          type: string;
          format: string;
        };
        flightNumber: {
          type: string;
        };
        gate: {
          type: string;
        };
        seat: {
          type: string;
        };
      };
      input: boolean;
    };
    hotel: {
      type: string;
      properties: {
        address: {
          type: string;
          properties: {
            city: {
              type: string;
            };
            country: {
              type: string;
            };
            street: {
              type: string;
            };
            zipCode: {
              type: string;
            };
          };
        };
        bookingNumber: {
          type: string;
        };
        name: {
          type: string;
        };
        phone: {
          type: string;
        };
        room: {
          type: string;
        };
      };
      input: boolean;
    };
  };
};
//# sourceMappingURL=mock.d.ts.map
