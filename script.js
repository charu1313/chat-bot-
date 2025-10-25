const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Show bot message
function showBotMessage(message) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", "bot");
  msgDiv.innerHTML = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Show user message
function showUserMessage(message) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", "user");
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Bot responses
function botResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes("hi") || msg.includes("hello")) {
    return "Hello there! How are you feeling today?";
  } 
  else if (msg.includes("who are you")) {
    return "I’m your HealthCare Assistant 🤖 — here to help you stay healthy and happy!";
  } else if (msg.includes("how are you")) {
    return "I’m feeling great and ready to care for your health! How about you?";
  } else if (msg.includes("fine") || msg.includes("good")) {
    return "Glad to hear that! Remember to drink water and take deep breaths 🌿";
  } else if (msg.includes("sad") || msg.includes("tired")) {
    return "I’m sorry to hear that. Please take a little rest and remember — your health matters 💚";
  } else if (msg.includes("pain") || msg.includes("sick") || msg.includes("fever")) {
    return "I'm sorry you're not feeling well. Try resting, drink fluids, and seek medical advice if it persists 🩺";
  } else if (msg.includes("thank")) {
    return "You're always welcome! Take care of yourself 🌼";
  } 
  else if (msg.includes("who are you")) {
    return "I’m CareBot — your friendly virtual health assistant, here to keep you feeling your best 🩺";
  }
  else if (msg.includes("how are you")) {
    return "I’m feeling great and full of positive energy! How about you? 🌿";
  }
  else if (msg.includes("exercise") || msg.includes("workout")) {
    return "Exercise keeps your heart strong and mood bright! Aim for 30 minutes a day 🏃‍♀️";
  }
  else if (msg.includes("yoga") || msg.includes("stretch")) {
    return "Yoga and stretching are amazing for flexibility and calmness 🧘‍♀️ Try a few minutes each morning!";
  }
  else if (msg.includes("food") || msg.includes("diet")) {
    return "A balanced diet fuels your energy. Include vegetables, fruits, and whole grains 🥦🍎";
  }
  else if (msg.includes("fruit")) {
    return "Fruits are nature’s candy — rich in vitamins and fiber 🍉🍌🍊 Eat at least 2 servings daily!";
  }
  else if (msg.includes("vegetable")) {
    return "Vegetables give your body strength and protect your cells 🥕🥬 Try to fill half your plate with them!";
  }
  else if (msg.includes("sleep")) {
    return "Sleep heals and refreshes your body — try getting 7–8 hours each night 😴";
  }
  else if (msg.includes("water") || msg.includes("drink")) {
    return "Hydration is key! Try to drink 8 glasses of water daily 💧 Your body will thank you!";
  }
  else if (msg.includes("stress") || msg.includes("anxiety")) {
    return "Breathe in deeply and let go of tension 🌸 You’re doing your best — take a short break!";
  }
  else if (msg.includes("mental") || msg.includes("mind")) {
    return "Mental health matters 💚 Take time for yourself, meditate, and do things that make you smile.";
  }
  else if (msg.includes("skin")) {
    return "Healthy skin starts from within — drink water, eat fruits, and wash your face gently twice a day 🌼";
  }
  else if (msg.includes("eyes") || msg.includes("vision")) {
    return "To rest your eyes: follow the 20-20-20 rule — every 20 minutes, look 20 feet away for 20 seconds 👀";
  }
  else if (msg.includes("immunity") || msg.includes("immune")) {
    return "Boost your immunity with vitamin C, proper sleep, and regular exercise 💪🍊";
  }
  else if (msg.includes("heart") || msg.includes("blood pressure")) {
    return "For heart health: eat fiber, avoid too much salt, and walk daily ❤️";
  }
  else if (msg.includes("sugar") || msg.includes("diabetes")) {
    return "Keep sugar levels in check! Avoid too many sweets and drink lots of water 🩸";
  }
  else if (msg.includes("cold") || msg.includes("cough") || msg.includes("flu")) {
    return "Rest, hydrate, and try warm soups 🍵 If symptoms persist, see a doctor 🩺";
  }
  else if (msg.includes("pain") || msg.includes("fever") || msg.includes("sick")) {
    return "Sorry you’re not feeling well 💊 Rest, hydrate, and seek medical care if needed.";
  }
  else if (msg.includes("vitamin")) {
    return "Vitamins keep your body running smoothly! Eat colorful foods to get natural vitamins 🍇🌽";
  }
  else if (msg.includes("medicine")) {
    return "Always take your medicines on time and as prescribed by your doctor 💊";
  }
  else if (msg.includes("doctor") || msg.includes("checkup")) {
    return "Regular checkups are important! Prevention is better than cure 🩺";
  }
  else if (msg.includes("sun") || msg.includes("vitamin d")) {
    return "Sunlight boosts vitamin D levels ☀️ Try spending 10–15 minutes in the morning sun!";
  }
  else if (msg.includes("covid") || msg.includes("virus")) {
    return "Stay safe from infections: wash hands, eat healthy, and avoid crowded places 😷";
  }
  else if (msg.includes("hygiene") || msg.includes("clean")) {
    return "Good hygiene prevents illness — wash hands often and keep your surroundings tidy 🧼";
  }
  else if (msg.includes("thank")) {
    return "You’re most welcome! Remember, small healthy habits make a big difference 🌿";
  }
  else if (msg.includes("bye")) {
    return "Goodbye! Stay strong, smile often, and keep your body happy 💚";
  }
  else {
    // Default healthy wisdom
    const randomTips = [
      "💡 Health Tip: Take a short walk every hour to refresh your mind.",
      "💡 Health Tip: Replace sugary drinks with water or herbal tea.",
      "💡 Health Tip: Laughter boosts your immune system — smile more 😄",
      "💡 Health Tip: Deep breathing for 2 minutes can calm your nerves.",
      "💡 Health Tip: Good posture reduces fatigue and back pain."
    ];
    const randomIndex = Math.floor(Math.random() * randomTips.length);
    return randomTips[randomIndex];
  }
}





// Send message
function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  showUserMessage(message);
  userInput.value = "";

  setTimeout(() => {
    const reply = botResponse(message);
    showBotMessage(reply);
  }, 700);
}

// Press Enter to send
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

// Initial greeting
window.onload = () => {
  setTimeout(() => {
    showBotMessage("👋 Hello! How is your today?");
  }, 500);
  setTimeout(() => {
    showBotMessage("I hope you're having a good day. Take care and stay healthy 💚");
  }, 1500);
};
