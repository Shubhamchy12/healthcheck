import React from "react";
import TestCard from "./TestCard";

function Test(){
    const testData =[
        {
           title:"BMI Check",
           description: "Measure your body mass index to track weight and fitness."
        },
        {
           title:"Blood Sugar Test",
           description:"Monitor your sugar levels and avoid early health issues."
        },
        {
            title:"Blood Pressure",
            description: "Track your BP levels and keep your heart healthy.",
        },
        {
            title:"Cholesterol Test",
            description: "Keep an eye on your cholesterol levels for heart health." 
        },
        
        {
            title:"Vision Check",
            description: "Regular eye check-ups to maintain good vision."
        },
        { 
            title: "Vitamin D Test", 
            description: "Check your vitamin D levels for overall well-being." 
        },
        { 
            title: "Thyroid Test", 
            description: "Monitor your thyroid function to maintain metabolic balance." 
        },
        {
             title: "Dental Check", 
             description: "Prevent dental problems with routine check-ups." 
        },

    ]
    return(
         <section className="tests">
      <h3>Available Health Tests</h3>
      <div className="test-grid">
        {testData.map((test, index) => (
          <TestCard key={index} title={test.title} description={test.description} />
        ))}
      </div>
    </section>
    )
}

export default Test;


/* 
 title: "Blood Pressure", description: "Track your BP levels and keep your heart healthy." },
  { title: "Cholesterol Test", description: "Keep an eye on your cholesterol levels for heart health." },
  { title: "Vision Check", description: "Regular eye check-ups to maintain good vision." },
  { title: "Dental Check", description: "Prevent dental problems with routine check-ups." },
  { title: "Vitamin D Test", description: "Check your vitamin D levels for overall well-being." },
  { title: "Thyroid Test", description: "Monitor your thyroid function to maintain metabolic balance." },
];
*/