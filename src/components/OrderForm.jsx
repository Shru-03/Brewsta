import React, { useState } from "react";

const MultiStepOrderForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    coffeeType: "",
    size: "Medium",
    addons: [],
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleAddon = (addon) => {
    setFormData((prev) => ({
      ...prev,
      addons: prev.addons.includes(addon)
        ? prev.addons.filter((a) => a !== addon)
        : [...prev.addons, addon],
    }));
  };

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  return (
    <section className="mt-40">
      <div className="mb-10">
        <h2 className="tracking-wider text-center text-3xl md:text-4xl uppercase text-white">
          Order your coffee
        </h2>
        <div className="mx-auto mt-2 w-[120px] h-[1px] bg-white" />
      </div>
      <div className="max-w-xl mx-auto  p-6 bg-[#987555] rounded-lg shadow">
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Contact Info</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
              value={formData.contact}
              onChange={(e) => handleChange("contact", e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <button
              onClick={next}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Coffee Preferences</h2>
            <select
              className="w-full p-2 border rounded"
              value={formData.coffeeType}
              onChange={(e) => handleChange("coffeeType", e.target.value)}
            >
              <option value="">Select coffee</option>
              <option>Espresso</option>
              <option>Latte</option>
              <option>Cappuccino</option>
            </select>

            <div className="flex gap-4">
              {["Small", "Medium", "Large"].map((size) => (
                <label key={size}>
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={formData.size === size}
                    onChange={(e) => handleChange("size", e.target.value)}
                  />{" "}
                  {size}
                </label>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2">
              {["Vanilla", "Extra Shot", "Oat Milk"].map((addon) => (
                <label key={addon}>
                  <input
                    type="checkbox"
                    checked={formData.addons.includes(addon)}
                    onChange={() => toggleAddon(addon)}
                  />{" "}
                  {addon}
                </label>
              ))}
            </div>

            <div className="flex justify-between">
              <button onClick={prev} className="bg-gray-300 px-4 py-2 rounded">
                Back
              </button>
              <button
                onClick={next}
                className="bg-black text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Delivery Info</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="w-full p-2 border rounded"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              className="w-full p-2 border rounded"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
            />
            <input
              type="text"
              placeholder="ZIP Code"
              className="w-full p-2 border rounded"
              value={formData.zip}
              onChange={(e) => handleChange("zip", e.target.value)}
            />
            <div className="flex justify-between">
              <button onClick={prev} className="bg-gray-300 px-4 py-2 rounded">
                Back
              </button>
              <button
                onClick={() =>
                  alert(
                    "Order submitted:\n" + JSON.stringify(formData, null, 2)
                  )
                }
                className="bg-black text-white px-4 py-2 rounded"
              >
                Submit Order
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MultiStepOrderForm;
