import React from "react";

export default function GymPlanWebsite() {
  return (
    <div className="font-sans bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-800 text-white shadow-lg">
        <h1 className="text-2xl font-bold tracking-wide">Muscle Up Unisex GYM</h1>
        <div className="space-x-6 hidden md:block font-medium">
          <a href="#home" className="hover:text-red-400 transition">Home</a>
          <a href="#plans" className="hover:text-red-400 transition">Plans</a>
          <a href="#nutrition" className="hover:text-red-400 transition">Nutrition</a>
          <a href="#contact" className="hover:text-red-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="h-[90vh] bg-[url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1100&q=80')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">Transform Your Body</h2>
        <p className="mt-4 text-xl max-w-2xl drop-shadow-lg">
          Build muscle, burn fat, and become your best self with our professional fitness plans.
        </p>
        <button className="mt-6 bg-red-500 px-7 py-3 rounded-xl text-lg font-semibold hover:bg-red-600 transition">
          Explore Plans
        </button>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 px-6 md:px-20">
        <h3 className="text-4xl font-bold text-center mb-10">Professional Gym Plans</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Beginner Plan */}
          <div className="bg-gray-800 shadow-xl p-8 rounded-2xl border-t-4 border-red-500 text-center">
            <h4 className="text-2xl font-bold mb-4">Beginner Plan</h4>
            <p className="text-gray-300 mb-6">For newcomers starting their fitness journey.</p>
            <ul className="space-y-3 text-gray-300">
              <li>✔ Full-body workouts</li>
              <li>✔ Basic cardio routine</li>
              <li>✔ 6 days/week</li>
              <li>✔ Beginner diet plan</li>
            </ul>
            <p className="text-3xl font-extrabold mt-6">₹999/mo</p>
            <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition w-full">
              Choose Plan
            </button>
          </div>

          {/* Transformation Plan */}
          <div className="bg-gray-700 text-white shadow-xl p-8 rounded-2xl border-t-4 border-red-400 text-center scale-105">
            <h4 className="text-2xl font-bold mb-4">Transformation Plan</h4>
            <p className="mb-6 text-gray-200">Our most recommended plan for fast results.</p>
            <ul className="space-y-3 text-gray-200">
              <li>✔ Strength + Cardio mix</li>
              <li>✔ Fat-loss routine</li>
              <li>✔ 6 days/week</li>
              <li>✔ Custom meal plan</li>
              <li>✔ Trainer support</li>
            </ul>
            <p className="text-3xl font-extrabold mt-6">₹1999/mo</p>
            <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition w-full">
              Choose Plan
            </button>
          </div>

          {/* Elite Athlete Plan */}
          <div className="bg-gray-800 shadow-xl p-8 rounded-2xl border-t-4 border-red-500 text-center">
            <h4 className="text-2xl font-bold mb-4">Elite Athlete Plan</h4>
            <p className="text-gray-300 mb-6">For professionals and advanced athletes.</p>
            <ul className="space-y-3 text-gray-300">
              <li>✔ High-intensity training</li>
              <li>✔ Strength conditioning</li>
              <li>✔ 6 days/week</li>
              <li>✔ Premium nutrition plan</li>
              <li>✔ Dedicated personal coach</li>
            </ul>
            <p className="text-3xl font-extrabold mt-6">₹3499/mo</p>
            <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition w-full">
              Choose Plan
            </button>
          </div>
        </div>
      </section>

      {/* Nutrition */}
      <section id="nutrition" className="py-20 px-6 md:px-20">
        <h3 className="text-4xl font-bold text-center mb-10">Nutrition & Diet Plans</h3>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c07?auto=format&fit=crop&w=800&q=80" alt="Nutrition" className="rounded-2xl shadow-lg" />
          <p className="text-lg text-gray-300">
            We offer tailored meal plans to help you gain muscle, lose fat, and maintain a healthy lifestyle. Our expert nutritionists design diets that suit your body type and fitness goals.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-800 text-white text-center px-6 md:px-20">
        <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
        <p>Email: support@muscleupgym.com</p>
        <p>Phone: 09834184019</p>
        <p className="mt-4">Address: 129, Mahlgi Nagar Road, Hudkeshwar Rd, Shivaji Colony, Chandrakiran Nagar, Nagpur, Maharashtra 440034</p>
        <button className="mt-6 bg-red-500 px-6 py-3 rounded-xl hover:bg-red-600 transition">
          Book Your Spot Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        © 2025 Muscle Up Unisex GYM. All rights reserved.
      </footer>
    </div>
  );
}
