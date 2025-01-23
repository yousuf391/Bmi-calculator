document.getElementById("calculate-btn").addEventListener("click", function () {
    // Get the input values
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
  
    // Validate inputs
    if (!weight || !height || weight <= 0 || height <= 0) {
      document.getElementById("result").innerText = "Please enter valid weight and height!";
      return;
    }
  
    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  
    // Determine BMI category
    let category = "";
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }
  
    // Display result
    document.getElementById("result").innerText = `Your BMI: ${bmi} (${category})`;
  });
  