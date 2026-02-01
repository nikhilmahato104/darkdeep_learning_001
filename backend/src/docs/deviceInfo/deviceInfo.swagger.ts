export const deviceInfoSwagger = {
  "/api/device-info": {
    get: {
      tags: ["Device Info"],
      summary: "Get all device information records",
      responses: {
        200: { description: "OK" },
      },
    },

    post: {
      tags: ["Device Info"],
      summary: "Create device information",
      requestBody: {
        required: false,
        content: {
          "application/json": {
            example: {
              latitude: 28.6139,
              longitude: 77.209,
              city: "New Delhi",
              country: "India",
              timezone: "Asia/Kolkata",
              deviceType: "mobile",
              deviceBrand: "Samsung",
              deviceModel: "Galaxy S21",
              os: "Android",
              osVersion: "13",
              browser: "Chrome",
              browserVersion: "120.0",
              screenWidth: 1080,
              screenHeight: 2400,
              devicePixelRatio: 2.5,
              ipAddress: "192.168.1.1",
              networkType: "4G",
              batteryLevel: 82,
              isCharging: true,
              language: "en-IN",
              userAgent: "Mozilla/5.0",
              platform: "Android",
              userId: "65f1a9c12e9d4a0012abcd34"
            },
          },
        },
      },
      responses: {
        201: { description: "Created" },
      },
    },
  },

  "/api/device-info/{id}": {
    get: {
      tags: ["Device Info"],
      summary: "Get device info by ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: { description: "OK" },
      },
    },

    put: {
      tags: ["Device Info"],
      summary: "Update device info",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      requestBody: {
        required: false,
        content: {
          "application/json": {
            example: {
              networkType: "5G",
              batteryLevel: 90,
            },
          },
        },
      },
      responses: {
        200: { description: "Updated" },
      },
    },

    delete: {
      tags: ["Device Info"],
      summary: "Delete device info",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: { description: "Deleted" },
      },
    },
  },
};
