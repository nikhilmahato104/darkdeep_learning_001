import mongoose from "mongoose";

const DeviceInfoSchema = new mongoose.Schema(
  {
    // 🌍 Location Info
    latitude: { type: Number, default: null },
    longitude: { type: Number, default: null },
    city: { type: String, default: null },
    state: { type: String, default: null },
    country: { type: String, default: null },
    timezone: { type: String, default: null },

    // ⏱ Time Info
    localTime: { type: String, default: null },
    utcTime: { type: String, default: null },

    // 📱 Device Info
    deviceType: { type: String, default: null }, // mobile / desktop / tablet
    deviceBrand: { type: String, default: null },
    deviceModel: { type: String, default: null },

    // 🖥 System Info
    os: { type: String, default: null },
    osVersion: { type: String, default: null },
    browser: { type: String, default: null },
    browserVersion: { type: String, default: null },

    // 📐 Screen Info
    screenWidth: { type: Number, default: null },
    screenHeight: { type: Number, default: null },
    devicePixelRatio: { type: Number, default: null },

    // 🌐 Network Info
    ipAddress: { type: String, default: null },
    networkType: { type: String, default: null }, // wifi / 4g / 5g
    isp: { type: String, default: null },

    // 🔋 Hardware Info
    batteryLevel: { type: Number, default: null },
    isCharging: { type: Boolean, default: null },
    ram: { type: String, default: null },
    cpuCores: { type: Number, default: null },

    // 🧠 Extra
    language: { type: String, default: null },
    userAgent: { type: String, default: null },
    platform: { type: String, default: null },
  },
  { timestamps: true }
);

export const DeviceInfo = mongoose.model("DeviceInfo", DeviceInfoSchema);
