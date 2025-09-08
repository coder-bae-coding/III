// src/app/data.ts (or wherever you define mockData)
export interface MockDataType {
    [key: string]: any[];
}

export const mockData: MockDataType = {
    
  "ic11Mock1": [
    {
      "questionId": "Q1",
      "question": "What is the compensation payable for death in cases relating to principal of no fault under Sec 140 of Motor Vehicles Act 1988?",
      "options": [
        {
          "id": "A",
          "text": "Rs. 10000"
        },
        {
          "id": "B",
          "text": "Rs. 50000"
        },
        {
          "id": "C",
          "text": "Rs 100000"
        },
        {
          "id": "D",
          "text": "Rs 250000"
        },
        {
          "id": "E",
          "text": "Rs 500000"
        }
      ],
      "correctOption": "B",
      "explanation": null
    },
    {
      "questionId": "Q2",
      "question": "In which two ways can risk be measured within a risk register?",
      "options": [
        {
          "id": "A",
          "text": "Probability and Transferability"
        },
        {
          "id": "B",
          "text": "Probability and Severity"
        },
        {
          "id": "C",
          "text": "Probability and Financial"
        },
        {
          "id": "D",
          "text": "Probability and Ownership"
        },
        {
          "id": "E",
          "text": "Probability and Assurance"
        }
      ],
      "correctOption": "B",
      "explanation": "Risk must be examined carefully, identified and measured in terms of following factors: 1. Frequency of its likely occurance 2. Probability of loss / damage 3. Severity of the effects of a loss 4. Perception of the probability of loss"
    },
    {
      "questionId": "Q3",
      "question": "The Motor Vehicles Act was enacted in the year _________",
      "options": [
        {
          "id": "A",
          "text": "1937"
        },
        {
          "id": "B",
          "text": "1938"
        },
        {
          "id": "C",
          "text": "1939"
        },
        {
          "id": "D",
          "text": "1940"
        },
        {
          "id": "E",
          "text": "1941"
        }
      ],
      "correctOption": "C",
      "explanation": "The Motor Vehicles Act was first enacted in 1939. It has since been amended and replaced by the Motor Vehicles Act, 1988, which is the current governing legislation."
    },
    {
      "questionId": "Q4",
      "question": "What is the claim loading applied to a policy known as?",
      "options": [
        {
          "id": "A",
          "text": "Claim Minus"
        },
        {
          "id": "B",
          "text": "Claim Load"
        },
        {
          "id": "C",
          "text": "Claim Malus"
        },
        {
          "id": "D",
          "text": "Claim Fides"
        },
        {
          "id": "E",
          "text": "Claim Bonus"
        }
      ],
      "correctOption": "C",
      "explanation": "Sometimes insurers load the premiums as per a published schedule when the claims experience is bad. Such loading of premium when the claims experience is poor is known as Loading/Malus."
    },
    {
      "questionId": "Q5",
      "question": "______ hazard is not one of the prime hazards an underwriter looks at.",
      "options": [
        {
          "id": "A",
          "text": "Physical"
        },
        {
          "id": "B",
          "text": "Moral"
        },
        {
          "id": "C",
          "text": "Risk"
        },
        {
          "id": "D",
          "text": "Financial"
        },
        {
          "id": "E",
          "text": "All of the above"
        }
      ],
      "correctOption": "C",
      "explanation": "Financial, Physical and Moral are the three hazards, risk is the odd one out.."
    },
    {
      "questionId": "Q6",
      "question": "IRDA premium investment guidelines state that investments in Central Government Securities should not be less than ______",
      "options": [
        {
          "id": "A",
          "text": "10%"
        },
        {
          "id": "B",
          "text": "20%"
        },
        {
          "id": "C",
          "text": "30%"
        },
        {
          "id": "D",
          "text": "35%"
        },
        {
          "id": "E",
          "text": "No such guidelines"
        }
      ],
      "correctOption": "B",
      "explanation": "As per premium investment guidelines by IRDA, Investment in Central Govt. securities should not be less than 20%."
    },
    {
      "questionId": "Q7",
      "question": "______ covers are related to the total amount of claims in a year over and above a particular limit or loss ratio.",
      "options": [
        {
          "id": "A",
          "text": "Treaty"
        },
        {
          "id": "B",
          "text": "Surplus"
        },
        {
          "id": "C",
          "text": "Stop Loss"
        },
        {
          "id": "D",
          "text": "Premium"
        },
        {
          "id": "E",
          "text": "Proportionate"
        }
      ],
      "correctOption": "C",
      "explanation": "Stop Loss covers are related to the total amount of claims in a year over and above a particular limit or Loss Ratio."
    },
    {
      "questionId": "Q8",
      "question": "Pure Premium is defined as ______",
      "options": [
        {
          "id": "A",
          "text": "Total premium divided by the number of exposure units"
        },
        {
          "id": "B",
          "text": "Total premium divided by the total claims"
        },
        {
          "id": "C",
          "text": "Total amount of claims divided by premium"
        },
        {
          "id": "D",
          "text": "Total amount of claims incurred per year divided by the number of exposure units"
        },
        {
          "id": "E",
          "text": "None of the above"
        }
      ],
      "correctOption": "D",
      "explanation": null
    },
    {
      "questionId": "Q9",
      "question": "A subrogation claim is recovered from the Third Party and/or which other party?",
      "options": [
        {
          "id": "A",
          "text": "Client's insurers"
        },
        {
          "id": "B",
          "text": "Reinsurers"
        },
        {
          "id": "C",
          "text": "Third Party Reinsurers"
        },
        {
          "id": "D",
          "text": "Third Party insurers"
        },
        {
          "id": "E",
          "text": "None of the above"
        }
      ],
      "correctOption": "D",
      "explanation": "The insurer recovers subrogation amounts from the Third Party and / or Third Party insurers."
    },
    {
      "questionId": "Q10",
      "question": "Which insurance policy reimburses hospitalisation and domiciliary hospitalisation expenses for treatment of diseases etc.",
      "options": [
        {
          "id": "A",
          "text": "Endowment Insurance"
        },
        {
          "id": "B",
          "text": "Life Insurance"
        },
        {
          "id": "C",
          "text": "Mediclaim Insurance"
        },
        {
          "id": "D",
          "text": "Accident Insurance"
        },
        {
          "id": "E",
          "text": "Motor Insurance"
        }
      ],
      "correctOption": "C",
      "explanation": null
    },
    {
      "questionId": "Q11",
      "question": "The special declaration deposit premium of 100% of the premium on the sum insured is based on the ____________ (marine insurance).",
      "options": [
        {
          "id": "A",
          "text": "Estimated next year's turnover"
        },
        {
          "id": "B",
          "text": "Current year's turnover"
        },
        {
          "id": "C",
          "text": "Previous year's turnover"
        },
        {
          "id": "D",
          "text": "Last two year's turnover"
        },
        {
          "id": "E",
          "text": "First year's turnover"
        }
      ],
      "correctOption": "C",
      "explanation": "When a Special Declaration Policy is issued, sum insured is based on previous years turnover or in case of fresh proposal, on a fair estimate of annual dispatches."
    },
    {
      "questionId": "Q12",
      "question": "The cover of stop loss treaty based on ______",
      "options": [
        {
          "id": "A",
          "text": "Underwriters assessment"
        },
        {
          "id": "B",
          "text": "Sum insured"
        },
        {
          "id": "C",
          "text": "Loss amount"
        },
        {
          "id": "D",
          "text": "Claims ratio"
        },
        {
          "id": "E",
          "text": "Size of loss"
        }
      ],
      "correctOption": "D",
      "explanation": "Stop Loss covers are related to the total amount of claims in a year over and above a particular limit or Loss Ratio."
    },
    {
      "questionId": "Q13",
      "question": "Under the Motor third party insurance, the compensation for death claims to a pedestrian is ______",
      "options": [
        {
          "id": "A",
          "text": "Rs 5000"
        },
        {
          "id": "B",
          "text": "Rs 25000"
        },
        {
          "id": "C",
          "text": "Rs 50000"
        },
        {
          "id": "D",
          "text": "Rs 100000"
        },
        {
          "id": "E",
          "text": "Rs 500000"
        }
      ],
      "correctOption": "C",
      "explanation": "Under Motor Vehicles Act 1988 the amount of compensation payable is Rs 50000 for death and Rs 25000 for permanent disablement of any person resulting from an accident arising out of the use of motor vehicle."
    },
    {
      "questionId": "Q14",
      "question": "Which category of insurers has the largest share of general Insurance premium in the India?",
      "options": [
        {
          "id": "A",
          "text": "Private Insurance Companies"
        },
        {
          "id": "B",
          "text": "Public Private Insurance Companies"
        },
        {
          "id": "C",
          "text": "Public Sector Insurance Companies (PSU)"
        },
        {
          "id": "D",
          "text": "Foreign Insurance Companies"
        },
        {
          "id": "E",
          "text": "Mutual Fund Companies"
        }
      ],
      "correctOption": "C",
      "explanation": "New India, United, Oriental, National Insurance Company etc. are PSU insurers and command the biggest share of general insurance premium in India."
    },
    {
      "questionId": "Q15",
      "question": "Which policy provides cover for plant and machinery while being erected and tested?",
      "options": [
        {
          "id": "A",
          "text": "Pre Launch Insurance"
        },
        {
          "id": "B",
          "text": "Erection Insurance"
        },
        {
          "id": "C",
          "text": "Loss of profit insurance"
        },
        {
          "id": "D",
          "text": "Fire insurance"
        },
        {
          "id": "E",
          "text": "Marine Cum Erection insurance"
        }
      ],
      "correctOption": "B",
      "explanation": "Erection All Risks insurance policy is concerned with erection/installation of plant, machinery and equipment and structures involving no or very little civil engineering work."
    },
    {
      "questionId": "Q16",
      "question": "GIGO is _______ for the insurers.",
      "options": [
        {
          "id": "A",
          "text": "Advantageous"
        },
        {
          "id": "B",
          "text": "Profitable"
        },
        {
          "id": "C",
          "text": "Neutral"
        },
        {
          "id": "D",
          "text": "Harmful"
        },
        {
          "id": "E",
          "text": "Can have a positive or negative effect"
        }
      ],
      "correctOption": "D",
      "explanation": "GIGO means Garbage In Garbage Out. This means if you input nonsensical data in the IT systems, the output will be nonsensical."
    },
    {
      "questionId": "Q17",
      "question": "Where is the 'prohibition of rebates' mentioned?",
      "options": [
        {
          "id": "A",
          "text": "Claim form"
        },
        {
          "id": "B",
          "text": "Endorsement"
        },
        {
          "id": "C",
          "text": "Renewal notice"
        },
        {
          "id": "D",
          "text": "Proposal form"
        },
        {
          "id": "E",
          "text": "Policy form"
        }
      ],
      "correctOption": "D",
      "explanation": "Such prohibition is mentioned at the end of proposal form."
    },
    {
      "questionId": "Q18",
      "question": "Whom does the Fidelity Insurance policy cover?",
      "options": [
        {
          "id": "A",
          "text": "Non Govt employees"
        },
        {
          "id": "B",
          "text": "Semi Govt employees"
        },
        {
          "id": "C",
          "text": "Govt employees"
        },
        {
          "id": "D",
          "text": "All employees of any organization"
        },
        {
          "id": "E",
          "text": "Private company employees"
        }
      ],
      "correctOption": "D",
      "explanation": "Fidelity guarantee insurance indemnifies the employers against the financial loss suffered by them due to the specified dishonest acts of their employees."
    },
    {
      "questionId": "Q19",
      "question": "Which of these is NOT a deficiency of the Modern Portfolio Theory (MPT)?",
      "options": [
        {
          "id": "A",
          "text": "Investors are emotional"
        },
        {
          "id": "B",
          "text": "The financial returns distribution is asymmetrical"
        },
        {
          "id": "C",
          "text": "Co-relation of asset classes changes on externals"
        },
        {
          "id": "D",
          "text": "Optimal diversification strategy"
        },
        {
          "id": "E",
          "text": "Financial Markets are not efficient"
        }
      ],
      "correctOption": "D",
      "explanation": "MPT is a form of diversification. It explains how to find the best possible diversification stratergy under certain assumptions of risk and return."
    },
    {
      "questionId": "Q20",
      "question": "Which policy specifies the perils covered for property at specified locations?",
      "options": [
        {
          "id": "A",
          "text": "Hull insurance policy"
        },
        {
          "id": "B",
          "text": "Motor insurance policy"
        },
        {
          "id": "C",
          "text": "Fire insurance policy"
        },
        {
          "id": "D",
          "text": "Medi Claim policy"
        },
        {
          "id": "E",
          "text": "PA policy"
        }
      ],
      "correctOption": "C",
      "explanation": "A fire insurance policy specifies the perils covered for property at specified locations. It provides coverage against loss or damage to property due to fire and other named perils."
    },
    {
      "questionId": "Q21",
      "question": "What presents a full picture of the risk for deciding the rates of premium for drafting the policy and incorporating warranties?",
      "options": [
        {
          "id": "A",
          "text": "Risk inspection"
        },
        {
          "id": "B",
          "text": "Risk standardisation"
        },
        {
          "id": "C",
          "text": "Damage inspection"
        },
        {
          "id": "D",
          "text": "Premium rates inspection"
        },
        {
          "id": "E",
          "text": "Hazard inspection"
        }
      ],
      "correctOption": "A",
      "explanation": null
    },
    {
      "questionId": "Q22",
      "question": "______ covers operational loss to engines, air compressors, pumps etc.",
      "options": [
        {
          "id": "A",
          "text": "ALOP Policy"
        },
        {
          "id": "B",
          "text": "Boiler insurance"
        },
        {
          "id": "C",
          "text": "Hull insurance"
        },
        {
          "id": "D",
          "text": "Contractors All Risk insurance"
        },
        {
          "id": "E",
          "text": "Machinery breakdown insurance"
        }
      ],
      "correctOption": "E",
      "explanation": "Insurable property under the Machinery Breakdown policy are boilers, electrical, mechanical machinery and equipment"
    },
    {
      "questionId": "Q23",
      "question": "Policies under group health insurance schemes may be accepted in",
      "options": [
        {
          "id": "A",
          "text": "Equity Shares"
        },
        {
          "id": "B",
          "text": "EMIs"
        },
        {
          "id": "C",
          "text": "Loans"
        },
        {
          "id": "D",
          "text": "Installments"
        },
        {
          "id": "E",
          "text": "Debentures"
        }
      ],
      "correctOption": "D",
      "explanation": "Group health insurances can be granted by insurer by monthly salary deduction - as installments."
    },
    {
      "questionId": "Q24",
      "question": "Who arranges the re-insurance on behalf of insurer?",
      "options": [
        {
          "id": "A",
          "text": "Sales Agents"
        },
        {
          "id": "B",
          "text": "Corporate agents"
        },
        {
          "id": "C",
          "text": "Individual agents"
        },
        {
          "id": "D",
          "text": "Re-insurance brokers"
        },
        {
          "id": "E",
          "text": "Bancassurance"
        }
      ],
      "correctOption": "D",
      "explanation": null
    },
    {
      "questionId": "Q25",
      "question": "For what is 'Open Cover' generally issued?",
      "options": [
        {
          "id": "A",
          "text": "Fire insurance"
        },
        {
          "id": "B",
          "text": "Consignments"
        },
        {
          "id": "C",
          "text": "Trade"
        },
        {
          "id": "D",
          "text": "Stocks"
        },
        {
          "id": "E",
          "text": "Supply"
        }
      ],
      "correctOption": "B",
      "explanation": "An Open Cover is issued for import- export and also for inland consignments."
    },
    {
      "questionId": "Q26",
      "question": "When a Cover Note is issued, it is ______",
      "options": [
        {
          "id": "A",
          "text": "valid for 30 days"
        },
        {
          "id": "B",
          "text": "permanent"
        },
        {
          "id": "C",
          "text": "temporary"
        },
        {
          "id": "D",
          "text": "contractual"
        },
        {
          "id": "E",
          "text": "specific"
        }
      ],
      "correctOption": "C",
      "explanation": "A cover note is a document issued in advance of the policy. It is issued when the policy cannot for some reason, be issued immediately. The cover note is temporary and will be superseded once the policy is issued."
    },
    {
      "questionId": "Q27",
      "question": "The full form of IRDP is Integrated Rural Development Practice - State True or False?",
      "options": [
        {
          "id": "A",
          "text": "True"
        },
        {
          "id": "B",
          "text": "False"
        }
      ],
      "correctOption": "B",
      "explanation": "IRDP stands for Integrated Rural Development Programme."
    },
    {
      "questionId": "Q28",
      "question": "The provision of percentage in investment in a approved investments like infrastructure and social sector should not be less than ______",
      "options": [
        {
          "id": "A",
          "text": "5"
        },
        {
          "id": "B",
          "text": "10"
        },
        {
          "id": "C",
          "text": "15"
        },
        {
          "id": "D",
          "text": "20"
        },
        {
          "id": "E",
          "text": "25"
        }
      ],
      "correctOption": "B",
      "explanation": "This is as per IRDA Investment regulations 2000."
    },
    {
      "questionId": "Q29",
      "question": "What does Commercial Pricing in a hard market refers to?",
      "options": [
        {
          "id": "A",
          "text": "Increasing the premium above book rates"
        },
        {
          "id": "B",
          "text": "Decreasing the premium below book rates"
        },
        {
          "id": "C",
          "text": "Special premium rates"
        },
        {
          "id": "D",
          "text": "Below market deductibles"
        },
        {
          "id": "E",
          "text": "Free add on covers"
        }
      ],
      "correctOption": "A",
      "explanation": "Sometimes, despite getting the right price for the risk, there will be times when an argument is put forward for reducing the premium below the technical, burning cost or book rate. in such instances, the management may be willing to give an additional Commercial discount. This is known as Commercial Pricing."
    },
    {
      "questionId": "Q30",
      "question": "In PA (Personal Accident) insurance, the coverage for loss of one limb or one eye is ______ %.",
      "options": [
        {
          "id": "A",
          "text": "10"
        },
        {
          "id": "B",
          "text": "20"
        },
        {
          "id": "C",
          "text": "30"
        },
        {
          "id": "D",
          "text": "40"
        },
        {
          "id": "E",
          "text": "50"
        }
      ],
      "correctOption": "E",
      "explanation": "As per Table C of a PA policy - Loss of one limb or one eye wherein 50% of the capital sum insured is payable."
    },
    {
      "questionId": "Q31",
      "question": "Settlement of claims is an important function of which organization?",
      "options": [
        {
          "id": "A",
          "text": "Mutual Fund organization"
        },
        {
          "id": "B",
          "text": "Insurance organization"
        },
        {
          "id": "C",
          "text": "NGO's"
        },
        {
          "id": "D",
          "text": "Service organization"
        },
        {
          "id": "E",
          "text": "Govt. organization"
        }
      ],
      "correctOption": "B",
      "explanation": null
    },
    {
      "questionId": "Q32",
      "question": "Which form has to be filled by the proposer for furnishing all material information required by the insurer in respect of a risk in order to enable the insurer to decide whether to accept or decline the insurance proposal?",
      "options": [
        {
          "id": "A",
          "text": "Inquiry Form"
        },
        {
          "id": "B",
          "text": "Application form"
        },
        {
          "id": "C",
          "text": "Registration form"
        },
        {
          "id": "D",
          "text": "Proposal form"
        },
        {
          "id": "E",
          "text": "Agreement form"
        }
      ],
      "correctOption": "D",
      "explanation": null
    },
    {
      "questionId": "Q33",
      "question": "What do the insurers do if they are not interested in the renewal of the policy?",
      "options": [
        {
          "id": "A",
          "text": "They give a actual notice"
        },
        {
          "id": "B",
          "text": "They give a public note"
        },
        {
          "id": "C",
          "text": "They give a prior notice"
        },
        {
          "id": "D",
          "text": "They give a meeting notice"
        },
        {
          "id": "E",
          "text": "They give a expired notice"
        }
      ],
      "correctOption": "C",
      "explanation": "Renewal of a policy is a benefit to insured, insurer has to give prior notice"
    },
    {
      "questionId": "Q34",
      "question": "Personal health insurance, home insurance etc are examples of",
      "options": [
        {
          "id": "A",
          "text": "Wholesale insurance"
        },
        {
          "id": "B",
          "text": "Retail insurance"
        },
        {
          "id": "C",
          "text": "Hull insurance"
        },
        {
          "id": "D",
          "text": "Corporate insurance"
        },
        {
          "id": "E",
          "text": "Property insurance"
        }
      ],
      "correctOption": "B",
      "explanation": "Retail means a direct product, usually aimed at the individuals, directly or through an agent. Retail insurance refers to home, motor and health insurance"
    },
    {
      "questionId": "Q35",
      "question": "Select the appropriate insurance product for the following: (1) Electro Medical Equipment (ii) Navigational equipment (iii) Signal and transmitting equipment (iv) Telecommunication.",
      "options": [
        {
          "id": "A",
          "text": "Advance Loss of Profits policy"
        },
        {
          "id": "B",
          "text": "Machinery Breakdown Policy"
        },
        {
          "id": "C",
          "text": "Standard fire and Machinery breakdown Policy"
        },
        {
          "id": "D",
          "text": "Contractors plant & machinery policy"
        },
        {
          "id": "E",
          "text": "Electronic Equipment Insurance Policy"
        }
      ],
      "correctOption": "E",
      "explanation": "Electronic Equipments, Peripherals etc are covered under the Electronic Equipment Insurance (EEI) Policy"
    },
    {
      "questionId": "Q36",
      "question": "The full form of ILU is",
      "options": [
        {
          "id": "A",
          "text": "Institute of London Ultrasounds"
        },
        {
          "id": "B",
          "text": "Institute of London Unified"
        },
        {
          "id": "C",
          "text": "Institute of London Undertakers"
        },
        {
          "id": "D",
          "text": "Institute of London Universities"
        },
        {
          "id": "E",
          "text": "Institute of London Underwriters"
        }
      ],
      "correctOption": "E",
      "explanation": null
    },
    {
      "questionId": "Q37",
      "question": "What is the maximum weekly amount that can be claimed under the temporary total disablement benefit of PA policy is",
      "options": [
        {
          "id": "A",
          "text": "Rs. 1000"
        },
        {
          "id": "B",
          "text": "Rs. 3000"
        },
        {
          "id": "C",
          "text": "Rs. 5000"
        },
        {
          "id": "D",
          "text": "Rs. 7500"
        },
        {
          "id": "E",
          "text": "Rs. 10000"
        }
      ],
      "correctOption": "B",
      "explanation": "The amount of weekly payment is restricted to a maximum sum of Rs. 3000 whatever be the capital sum assured."
    },
    {
      "questionId": "Q38",
      "question": "The ______ treaty is an automatic reinsurance whereby the ceding insurer is bound to part with a fixed percentage of every risk written by it.",
      "options": [
        {
          "id": "A",
          "text": "Facultative"
        },
        {
          "id": "B",
          "text": "Excess of loss"
        },
        {
          "id": "C",
          "text": "Stop loss"
        },
        {
          "id": "D",
          "text": "Quota share"
        },
        {
          "id": "E",
          "text": "Surplus"
        }
      ],
      "correctOption": "D",
      "explanation": null
    },
    {
      "questionId": "Q39",
      "question": "Where are the accounting transactions posted?",
      "options": [
        {
          "id": "A",
          "text": "Balance Sheet"
        },
        {
          "id": "B",
          "text": "Cash book"
        },
        {
          "id": "C",
          "text": "Day book"
        },
        {
          "id": "D",
          "text": "Subsidiary book"
        },
        {
          "id": "E",
          "text": "Account book"
        }
      ],
      "correctOption": "E",
      "explanation": null
    },
    {
      "questionId": "Q40",
      "question": "'Changes in the physical environment' can be identified as what type of risk?",
      "options": [
        {
          "id": "A",
          "text": "Strategic risk"
        },
        {
          "id": "B",
          "text": "Operational risk"
        },
        {
          "id": "C",
          "text": "Financial risk"
        },
        {
          "id": "D",
          "text": "Knowledge management risk"
        },
        {
          "id": "E",
          "text": "Compliance risk"
        }
      ],
      "correctOption": "A",
      "explanation": "These options are of various type of risks and \"Changes in the physical environment falls under Strategic risk."
    },
    {
      "questionId": "Q41",
      "question": "A person, whose home was destroyed in a fire, has replaced the tile flooring with marble and advised the supplier to mention in the bill the material as tile. This is an example of claim",
      "options": [
        {
          "id": "A",
          "text": "Over valuation"
        },
        {
          "id": "B",
          "text": "Indemnity"
        },
        {
          "id": "C",
          "text": "Betterment"
        },
        {
          "id": "D",
          "text": "Under ssurance"
        },
        {
          "id": "E",
          "text": "Reinstatement"
        }
      ],
      "correctOption": "C",
      "explanation": "Betterment Clause in insurance A provision which stipulates that if the repair or replacement of the damaged parts results in better than \"like kind or quality, the insurers will not pay for this improvement This clause is designed to preserve the concept of indemnity to the insured does not profit from the loss when the circumstances. such that it is impossible for the insurer to repair or replace the property without bettering the insured's position"
    },
    {
      "questionId": "Q42",
      "question": "Householders insurance are allowed to be accepted by the _______ offices.",
      "options": [
        {
          "id": "A",
          "text": "Operating office"
        },
        {
          "id": "B",
          "text": "Head office"
        },
        {
          "id": "C",
          "text": "Registered office"
        },
        {
          "id": "D",
          "text": "SEBI's office"
        },
        {
          "id": "E",
          "text": "IRDAI's office"
        }
      ],
      "correctOption": "A",
      "explanation": null
    },
    {
      "questionId": "Q43",
      "question": "As per the modern concept, the scope of customer service in insurance is",
      "options": [
        {
          "id": "A",
          "text": "Not much"
        },
        {
          "id": "B",
          "text": "limited"
        },
        {
          "id": "C",
          "text": "very big"
        },
        {
          "id": "D",
          "text": "wide"
        },
        {
          "id": "E",
          "text": "not so wide"
        }
      ],
      "correctOption": "D",
      "explanation": "Customer service in insurance sector has grown wide and includes premium payments, renewals, endorsements, claims etc."
    },
    {
      "questionId": "Q44",
      "question": "If the loss amount exceeds the overlying limit, the balance will revert to",
      "options": [
        {
          "id": "A",
          "text": "Insurer"
        },
        {
          "id": "B",
          "text": "Re-insurer"
        },
        {
          "id": "C",
          "text": "Insured"
        },
        {
          "id": "D",
          "text": "Underwriter"
        },
        {
          "id": "E",
          "text": "TPA"
        }
      ],
      "correctOption": "A",
      "explanation": "The Insurer has to bear the excess of loss above overlying limit."
    },
    {
      "questionId": "Q45",
      "question": "Regulatory Issues is an example of _______ risk.",
      "options": [
        {
          "id": "A",
          "text": "Operational"
        },
        {
          "id": "B",
          "text": "Strategic"
        },
        {
          "id": "C",
          "text": "Compliance"
        },
        {
          "id": "D",
          "text": "Financial"
        },
        {
          "id": "E",
          "text": "Knowledge management"
        }
      ],
      "correctOption": "C",
      "explanation": "Risks like Data protection, Employment practices, Consumer protection, Regulatory Issues etc. all fall under Compliance Risks."
    },
    {
      "questionId": "Q46",
      "question": "If a/an _______ issues a Claim Form, it does not constitute an admission of liability on its part.",
      "options": [
        {
          "id": "A",
          "text": "Agent"
        },
        {
          "id": "B",
          "text": "Insured"
        },
        {
          "id": "C",
          "text": "Claimant"
        },
        {
          "id": "D",
          "text": "Broker"
        },
        {
          "id": "E",
          "text": "Insurer"
        }
      ],
      "correctOption": "E",
      "explanation": "Even if the insurer issues a claim form, it does not mean that it has admitted to the liability and will pay the claim amount."
    },
    {
      "questionId": "Q47",
      "question": "A person whose house catches fire and most of the furniture is damaged. The cost of replacing this furniture is Rs 300000. He convinces a furniture dealer to provide a cash memo of Rs 500000. What situation is this?",
      "options": [
        {
          "id": "A",
          "text": "Under insurance"
        },
        {
          "id": "B",
          "text": "Over Insurance"
        },
        {
          "id": "C",
          "text": "Claims fraud"
        },
        {
          "id": "D",
          "text": "Deductible"
        },
        {
          "id": "E",
          "text": "Claim payable"
        }
      ],
      "correctOption": "C",
      "explanation": "Exaggerating loss with invoices of higher amount while claiming is like making profit at other policyholders expenses it is a fraud"
    },
    {
      "questionId": "Q48",
      "question": "Who uses the services of the specialist adjusters?",
      "options": [
        {
          "id": "A",
          "text": "Underwriters"
        },
        {
          "id": "B",
          "text": "Insurance Brokers"
        },
        {
          "id": "C",
          "text": "Insured"
        },
        {
          "id": "D",
          "text": "Insurer"
        },
        {
          "id": "E",
          "text": "Agent"
        }
      ],
      "correctOption": "D",
      "explanation": "Adjusters support the insurer in investigating technical claims."
    },
    {
      "questionId": "Q49",
      "question": "As per the Insurance Act, the _______ may, by rules, relax the requirements in respect of advance payment of premium.",
      "options": [
        {
          "id": "A",
          "text": "IRDAI"
        },
        {
          "id": "B",
          "text": "Central Government"
        },
        {
          "id": "C",
          "text": "State Government"
        },
        {
          "id": "D",
          "text": "SEBI"
        },
        {
          "id": "E",
          "text": "Any legal body"
        }
      ],
      "correctOption": "B",
      "explanation": "As per Sec 64 VB, Subsection 1-No insurer shall assume any risk in India in respect of any insurance business on which premium is not paid etc.. However, The Central Government may, by rules, relax the requirements of sub-section 1 in respect of particular categories in insurance policies."
    },
    {
      "questionId": "Q50",
      "question": "What is not a peril but still covered under the Institute Cargo Clauses -ICC (C) clauses for sea voyage?",
      "options": [
        {
          "id": "A",
          "text": "Grounding"
        },
        {
          "id": "B",
          "text": "Capsizing"
        },
        {
          "id": "C",
          "text": "Explosion"
        },
        {
          "id": "D",
          "text": "Sinking"
        },
        {
          "id": "E",
          "text": "Stranding"
        }
      ],
      "correctOption": "A",
      "explanation": "Grounding is not a peril but covered under ICC Clauses C."
    }
  ],
    "ic11Mock2":[
    {
        "questionId": "Q1",
        "question": "If the insurer wants to avoid liability on grounds of non-disclosure, he must prove certain facts which of the following is INCORRECT?",
        "options": [
            {"id": "A", "text": "Facts were within the actual or presumed knowledge of the insured"},
            {"id": "B", "text": "Undisclosed facts were material"},
            {"id": "C", "text": "The client was fraudulent"},
            {"id": "D", "text": "Facts were not communicated to the insurer"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "Insurer does not have to prove fraud to dispute a claim."
    },
    {
        "questionId": "Q2",
        "question": "In case of Motor Insurance which document is considered as the only evidence of existence of a valid insurance by police authorities and RTO?",
        "options": [
            {"id": "A", "text": "Insurance Notice Document"},
            {"id": "B", "text": "Cover Notice"},
            {"id": "C", "text": "Policy Document"},
            {"id": "D", "text": "Certificate of Insurance"},
            {"id": "E", "text": "Any of the above"}
        ],
        "correctOption": "D",
        "explanation": null
    },
    {
        "questionId": "Q3",
        "question": "What does leakage relate to?",
        "options": [
            {"id": "A", "text": "A drop in claims reserves"},
            {"id": "B", "text": "Claim losses which can be recovered through subrogation, excess etc."},
            {"id": "C", "text": "Cash losses from employee embezzlement"},
            {"id": "D", "text": "Losses due to online fraud"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": null
    },
    {
        "questionId": "Q4",
        "question": "The Operative Clause is also known as",
        "options": [
            {"id": "A", "text": "Preamble"},
            {"id": "B", "text": "Policy Condition"},
            {"id": "C", "text": "Policy clause"},
            {"id": "D", "text": "Insuring clause"},
            {"id": "E", "text": "Heading"}
        ],
        "correctOption": "D",
        "explanation": null
    },
    {
        "questionId": "Q5",
        "question": "Which of these pools is not managed by GIC?",
        "options": [
            {"id": "A", "text": "Fire Catastrophe Pool"},
            {"id": "B", "text": "Third Party Motor Pool"},
            {"id": "C", "text": "Terrorism Pool"},
            {"id": "D", "text": "Marine Hull Pool"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": null
    },
    {
        "questionId": "Q6",
        "question": "_______ cannot be an intermediary.",
        "options": [
            {"id": "A", "text": "Bank"},
            {"id": "B", "text": "Insurer"},
            {"id": "C", "text": "Agent"},
            {"id": "D", "text": "Insurance Broker"},
            {"id": "E", "text": "All of the above"}
        ],
        "correctOption": "B",
        "explanation": "Insurance companies are Principals who appoint intermediaries etc."
    },
    {
        "questionId": "Q7",
        "question": "_______ policy provides cover for loss of gross profit due to stoppage of production.",
        "options": [
            {"id": "A", "text": "Consequential Loss policy"},
            {"id": "B", "text": "Loss Recovery policy"},
            {"id": "C", "text": "Long Term policy"},
            {"id": "D", "text": "Reinstatement Value policy"},
            {"id": "E", "text": "Declaration policy"}
        ],
        "correctOption": "A",
        "explanation": null
    },
    {
        "questionId": "Q8",
        "question": "The first aviation policy was issued in the year",
        "options": [
            {"id": "A", "text": "1901"},
            {"id": "B", "text": "1911"},
            {"id": "C", "text": "1921"},
            {"id": "D", "text": "1931"},
            {"id": "E", "text": "1941"}
        ],
        "correctOption": "B",
        "explanation": "The first aviation policy was issued by Lloyds in 1911."
    },
    {
        "questionId": "Q9",
        "question": "Which of these future trends the underwriter need not consider while calculating the technical pricing?",
        "options": [
            {"id": "A", "text": "Legal changes"},
            {"id": "B", "text": "Infiation"},
            {"id": "C", "text": "Claims made during the year"},
            {"id": "D", "text": "Technology"},
            {"id": "E", "text": "All of the above"}
        ],
        "correctOption": "C",
        "explanation": "The claims will certainly be considered by the underwriter but not under the heading of future trends."
    },
    {
        "questionId": "Q10",
        "question": "When does a General Insurance policy expire?",
        "options": [
            {"id": "A", "text": "At 12 noon of the day of expiry"},
            {"id": "B", "text": "Midday of the date of expiry"},
            {"id": "C", "text": "Midnight of the date of expiry"},
            {"id": "D", "text": "Midnight of the day before the date of expiry"},
            {"id": "E", "text": "On the morning of the date of expiry"}
        ],
        "correctOption": "C",
        "explanation": null
    },
    {
        "questionId": "Q11",
        "question": "Why do Moral Hazard arise?",
        "options": [
            {"id": "A", "text": "From natural calamities"},
            {"id": "B", "text": "From individuals moral weakness"},
            {"id": "C", "text": "From carelessness"},
            {"id": "D", "text": "From low morale"},
            {"id": "E", "text": "from Laziness"}
        ],
        "correctOption": "B",
        "explanation": "Moral hazard is the risk that a party to a transaction has not entered into the contract in good faith, has provided misleading information about its assets, liabilities credit capacity, or has an incentive to take unusual risks in a desperate attempt to earn a profit before the contract settles. Moral hazards can be present any time two parties come into agreement with one another. Each party in a contract may have the opportunity to gain from acting contrary to the principles laid out by the agreement."
    },
    {
        "questionId": "Q12",
        "question": "There is an increase in burglaries due to",
        "options": [
            {"id": "A", "text": "Fall in the stock markets"},
            {"id": "B", "text": "Economic Depression"},
            {"id": "C", "text": "Non-education"},
            {"id": "D", "text": "Unemployment"},
            {"id": "E", "text": "Deflation"}
        ],
        "correctOption": "B",
        "explanation": "Poverty is the root cause of crimes & it's linked with the economic depression. Under economic depression, not enough employment could be generated. Burglaries consequent upon poverty & unemployment may be controlled to a greater extent with the growth of economy"
    },
    {
        "questionId": "Q13",
        "question": "Interruption of business due to machinery breakdown or damage to stocks etc is termed as",
        "options": [
            {"id": "A", "text": "Loss of continulty"},
            {"id": "B", "text": "Loss of assets"},
            {"id": "C", "text": "Loss of finance"},
            {"id": "D", "text": "Loss of legal Hability"},
            {"id": "E", "text": "Loss of profit"}
        ],
        "correctOption": "E",
        "explanation": "The Loss of Profits policy is formulated to cover the likely monetary loss occurring from break in business activity that may arise due to physical loss of property by an event covered for insurance. The Policy broadly covers loss of Gross Profit on account of interruption of business, consequent upon Material Damage to property due to Fire or any other insured peril under the Standard Fire and Special Perils Policy."
    },
    {
        "questionId": "Q14",
        "question": "Why was the expert group constituted at the request of General Insurance Council?",
        "options": [
            {"id": "A", "text": "To look into insurance disputes"},
            {"id": "B", "text": "To look into underwriting issues"},
            {"id": "C", "text": "To look into customer complaints"},
            {"id": "D", "text": "To look into misrepresentation"},
            {"id": "E", "text": "To look into damages"}
        ],
        "correctOption": "B",
        "explanation": null
    },
    {
        "questionId": "Q15",
        "question": "To whom are long term insurance policies suitable?",
        "options": [
            {"id": "A", "text": "Retall customers"},
            {"id": "B", "text": "Corporate customers"},
            {"id": "C", "text": "Rural low income customers"},
            {"id": "D", "text": "Multinational customers"},
            {"id": "E", "text": "Industrial customers"}
        ],
        "correctOption": "A",
        "explanation": "For policies like fire insurance there is long term insurance possible and suitable to avoid regular renewals and it provides discount also. Fire insurance for retail segment ie individual house owners provide discount in basic premium for more than one year of insurance renewal."
    },
    {
        "questionId": "Q16",
        "question": "_______ is the most common form of organization in business.",
        "options": [
            {"id": "A", "text": "NGO"},
            {"id": "B", "text": "Company"},
            {"id": "C", "text": "Retail business"},
            {"id": "D", "text": "Financial institution"},
            {"id": "E", "text": "Partnership firm"}
        ],
        "correctOption": "B",
        "explanation": null
    },
    {
        "questionId": "Q17",
        "question": "What is the method of reinsurance known as where the individual proposal are referred for reinsurance acceptance or otherwise?",
        "options": [
            {"id": "A", "text": "Contractual Relationship"},
            {"id": "B", "text": "Treaty Reinsurance"},
            {"id": "C", "text": "Excess of loss"},
            {"id": "D", "text": "Quota share treaty"},
            {"id": "E", "text": "Facultative reinsurance"}
        ],
        "correctOption": "E",
        "explanation": "In Facultative Re-insurance the individual risks are offered to the re-insurer who quotes on his experience of that particular type of risk."
    },
    {
        "questionId": "Q18",
        "question": "Who receives the complaints in respect of repudiation of claims by an insurer?",
        "options": [
            {"id": "A", "text": "Agents"},
            {"id": "B", "text": "Insurance Brokers"},
            {"id": "C", "text": "Insurance Companies"},
            {"id": "D", "text": "Judge"},
            {"id": "E", "text": "Ombudsman"}
        ],
        "correctOption": "E",
        "explanation": "An Ombudsman is quasi judicial person who hears complaints for repudiation of claims."
    },
    {
        "questionId": "Q19",
        "question": "The public disclosure of unaudited balance sheet has to be made ______ by the insurance firm.",
        "options": [
            {"id": "A", "text": "Half monthly"},
            {"id": "B", "text": "Monthly"},
            {"id": "C", "text": "Quarterly"},
            {"id": "D", "text": "Half yearly"},
            {"id": "E", "text": "Annually"}
        ],
        "correctOption": "E",
        "explanation": "Disclosure of Balance sheet, Cash flow and Profit and loss follows ICAI accounting standard which is yearly."
    },
    {
        "questionId": "Q20",
        "question": "Reimbursement of expenses incurred for carriage of dead body is",
        "options": [
            {"id": "A", "text": "Rs 5000"},
            {"id": "B", "text": "Rs 2000"},
            {"id": "C", "text": "Rs 2500"},
            {"id": "D", "text": "Rs 3000"},
            {"id": "E", "text": "Rs 3500"}
        ],
        "correctOption": "C",
        "explanation": "The New India personal accident policy covers expenses incurred for carriage of dead body from place of accident to the resident subject to a limit of 25% of the capital sum insured or Rs. 2500 which ever is less."
    },
    {
        "questionId": "Q21",
        "question": "The amount of relief fixed under the Compulsory Public Liability policy in case of permanent partial disablement is",
        "options": [
            {"id": "A", "text": "Rs 11000"},
            {"id": "B", "text": "Rs 11500"},
            {"id": "C", "text": "Rs 12500"},
            {"id": "D", "text": "Rs 17500"},
            {"id": "E", "text": "Rs 19000"}
        ],
        "correctOption": "C",
        "explanation": "The actual medical expenses fixed is upto a maximum of Rs 12500 in various cases like permanent total disability, temporary partial disablement etc."
    },
    {
        "questionId": "Q22",
        "question": "Which is the treaty in which the arrangement can be 'per risk' or 'per event/accident'?",
        "options": [
            {"id": "A", "text": "Excess of loss treaty"},
            {"id": "B", "text": "Excess of profit treaty"},
            {"id": "C", "text": "Proportional treaty"},
            {"id": "D", "text": "Reinsurance treaty"},
            {"id": "E", "text": "Facultative treaty"}
        ],
        "correctOption": "A",
        "explanation": "Excess of Loss treaties do not protect risk exposure but protect loss as incurred by an insurer. While standard Excess of Loss is related to single loss amounts, either per risk or per event, stop-loss covers are related to the total amount of claims in a year over and above a particular limit."
    },
    {
        "questionId": "Q23",
        "question": "How are the claims cost ideally controlled?",
        "options": [
            {"id": "A", "text": "by improved application of dividend payments"},
            {"id": "B", "text": "by Improved application of loss management"},
            {"id": "C", "text": "by improved application of risks"},
            {"id": "D", "text": "by improved application of damage control"},
            {"id": "E", "text": "by improved application of underwriting"}
        ],
        "correctOption": "B",
        "explanation": null
    },
    {
        "questionId": "Q24",
        "question": "Whose functions are identification and acceptance of risk based on factual information, evaluation and acceptance?",
        "options": [
            {"id": "A", "text": "Underwriters"},
            {"id": "B", "text": "TPAS"},
            {"id": "C", "text": "Surveyors"},
            {"id": "D", "text": "Agents"},
            {"id": "E", "text": "Brokers"}
        ],
        "correctOption": "A",
        "explanation": "Underwriters identify risk, calculate, evaluate and decide on acceptance."
    },
    {
        "questionId": "Q25",
        "question": "The actions to be done before contract commences are reiterated in which document?",
        "options": [
            {"id": "A", "text": "Contract Form"},
            {"id": "B", "text": "Policy form"},
            {"id": "C", "text": "Renewal notice"},
            {"id": "D", "text": "Proposal form"},
            {"id": "E", "text": "Endorsement"}
        ],
        "correctOption": "D",
        "explanation": "Before a contract officially commences, the Proposal Form is typically the document that reiterates the necessary actions. This form outlines the terms, conditions, and requirements that must be fulfilled before the contract is finalized. It serves as a foundational document in contract negotiations, ensuring that all parties are aligned before proceeding."
    },
    {
        "questionId": "Q26",
        "question": "Where are the rights of subrogation commonly enforced?",
        "options": [
            {"id": "A", "text": "Motor Third Party (TP) insurance"},
            {"id": "B", "text": "Burglary Insurance"},
            {"id": "C", "text": "Marine insurance"},
            {"id": "D", "text": "Fire insurance"},
            {"id": "E", "text": "Erection all risk insurance"}
        ],
        "correctOption": "A",
        "explanation": "Subrogation is the right for an insurer to legally pursue a third party that caused an insurance loss to the insured. Third party causing accident to insured of an insurer, is generally seen in motor third party insurance."
    },
    {
        "questionId": "Q27",
        "question": "Which are the two categories in which partial losses in marine insurance can be classified?",
        "options": [
            {"id": "A", "text": "Actual average and General average"},
            {"id": "B", "text": "Particular average and standard average"},
            {"id": "C", "text": "Average average and General average"},
            {"id": "D", "text": "Particular average and General average"},
            {"id": "E", "text": "Consistent average and General average"}
        ],
        "correctOption": "D",
        "explanation": null
    },
    {
        "questionId": "Q28",
        "question": "When claim recoveries are made from third parties, its known as",
        "options": [
            {"id": "A", "text": "Premium Recovery"},
            {"id": "B", "text": "Subrogation"},
            {"id": "C", "text": "Deductible"},
            {"id": "D", "text": "Co-pay"},
            {"id": "E", "text": "Salvage"}
        ],
        "correctOption": "B",
        "explanation": "Subrogation is the right for an insurer to legally pursue a third party that caused an insurance loss to the insured. This is done as a means of recovering the amount of the claim paid by the insurance carrier to the insured for the loss."
    },
    {
        "questionId": "Q29",
        "question": "Which act provides insurance liability against accident occurring while handling any hazardous materials?",
        "options": [
            {"id": "A", "text": "The Contract Act"},
            {"id": "B", "text": "The Workmen's compensation act"},
            {"id": "C", "text": "The Public llability insurance act"},
            {"id": "D", "text": "The SEBI act"},
            {"id": "E", "text": "The Employee state insurance act"}
        ],
        "correctOption": "C",
        "explanation": null
    },
    {
        "questionId": "Q30",
        "question": "In which category of insurance, the insured is not paid the loss?",
        "options": [
            {"id": "A", "text": "Motor Vehicle insurance"},
            {"id": "B", "text": "Fire Insurance"},
            {"id": "C", "text": "PA policy"},
            {"id": "D", "text": "Liability insurance"},
            {"id": "E", "text": "Marine huli policy"}
        ],
        "correctOption": "D",
        "explanation": "Liability policy follows consumer protection movement. The payments are not made to the insured but to the third party claiming damages from the insured's negligence. For example-An electric appliance causing injury to the user due to bad quality."
    },
    {
        "questionId": "Q31",
        "question": "What is the term used when employees sustain accidents or suffer illness?",
        "options": [
            {"id": "A", "text": "Loss of Man-days"},
            {"id": "B", "text": "Loss of profit"},
            {"id": "C", "text": "Loss by legal liability."},
            {"id": "D", "text": "Loss of finance"},
            {"id": "E", "text": "Loss by illness"}
        ],
        "correctOption": "C",
        "explanation": "Employer's Liability Policy - The policy protects the employers against legal liability for payment of compensation for death or disablement of the employees by accident or disease arising out of and in the course of employment."
    },
    {
        "questionId": "Q32",
        "question": "The insurance of which companies is dealt mainly by State Insurance Funds?",
        "options": [
            {"id": "A", "text": "Private companies in a particular State"},
            {"id": "B", "text": "State Government owned companies"},
            {"id": "C", "text": "Unlisted State companies"},
            {"id": "D", "text": "Local Government owned companies"},
            {"id": "E", "text": "Multi National owned companies"}
        ],
        "correctOption": "B",
        "explanation": null
    },
    {
        "questionId": "Q33",
        "question": "In which currency should the settlement of claims under non-marine insurance made in?",
        "options": [
            {"id": "A", "text": "Indian Rupees"},
            {"id": "B", "text": "Swiss Francs"},
            {"id": "C", "text": "US Dollars"},
            {"id": "D", "text": "Euro's"},
            {"id": "E", "text": "British Pound"}
        ],
        "correctOption": "A",
        "explanation": "As FEMA rules apply here, the claims are settled in Indian Rupees."
    },
    {
        "questionId": "Q34",
        "question": "For what is the Trial Balance used?",
        "options": [
            {"id": "A", "text": "To prepare the Premium Register"},
            {"id": "B", "text": "To prepare the cash book"},
            {"id": "C", "text": "To prepare the account book"},
            {"id": "D", "text": "To prepare the Balance sheet"},
            {"id": "E", "text": "To prepare the Pass book"}
        ],
        "correctOption": "D",
        "explanation": "The Trial Balance forms the basis of making entries in the Balance Sheet."
    },
    {
        "questionId": "Q35",
        "question": "Whose responsibility is to collect detailed information of clients business?",
        "options": [
            {"id": "A", "text": "Sales agent"},
            {"id": "B", "text": "Insurers"},
            {"id": "C", "text": "Direct brokers"},
            {"id": "D", "text": "Underwriters"},
            {"id": "E", "text": "Business agents"}
        ],
        "correctOption": "C",
        "explanation": "Direct brokers came into the insurance market after IRDA (Insurance Brokers) Regulations, 2002. They act as an intermediary between insured &the insurers to obtain client's detailed information for insurance."
    },
    {
        "questionId": "Q36",
        "question": "Which insurance provides cover against death of animals like cows, bulls etc. within the geographical area?",
        "options": [
            {"id": "A", "text": "Animal insurance"},
            {"id": "B", "text": "Cattle insurance"},
            {"id": "C", "text": "Farm insurance"},
            {"id": "D", "text": "Agricultural equipment insurance"},
            {"id": "E", "text": "Domestic Livestock insurance"}
        ],
        "correctOption": "B",
        "explanation": "The Cattle Insurance scheme covers the following whether indigenous, exotic or cross-bred."
    },
    {
        "questionId": "Q37",
        "question": "Whose task is to meet people, explain and persuade them to buy the correct insurance?",
        "options": [
            {"id": "A", "text": "Brokers"},
            {"id": "B", "text": "Banks"},
            {"id": "C", "text": "Individuals"},
            {"id": "D", "text": "Agents"},
            {"id": "E", "text": "Insurers"}
        ],
        "correctOption": "D",
        "explanation": null
    },
    {
        "questionId": "Q38",
        "question": "The information which is obtained from the proposal form, the details of risk inspection etc are fed into the computers. This procedure is called",
        "options": [
            {"id": "A", "text": "Policy Procedure"},
            {"id": "B", "text": "Duty Procedure"},
            {"id": "C", "text": "Agreement Procedure."},
            {"id": "D", "text": "Documentation Procedure"},
            {"id": "E", "text": "Implementation Procedure"}
        ],
        "correctOption": "D",
        "explanation": null
    },
    {
        "questionId": "Q39",
        "question": "are large losses which may occur on rare occasions but have a devastating effect on an organisation.",
        "options": [
            {"id": "A", "text": "Catastrophes"},
            {"id": "B", "text": "Speculative"},
            {"id": "C", "text": "Chronic"},
            {"id": "D", "text": "Fundamental"},
            {"id": "E", "text": "Dynamic"}
        ],
        "correctOption": "A",
        "explanation": "Chronic Losses are small but regular. Sporadic Losses are medium but irregular. Catastrophic Losses are very large but rarely occur."
    },
    {
        "questionId": "Q40",
        "question": "TPA's are in the form of",
        "options": [
            {"id": "A", "text": "Partnership Firms"},
            {"id": "B", "text": "Companies"},
            {"id": "C", "text": "Insurance Brokers"},
            {"id": "D", "text": "Hospitals"},
            {"id": "E", "text": "Surveyors"}
        ],
        "correctOption": "B",
        "explanation": "Third Party Administrators (TPA) are required to be companies with a share capital of at least Rs 1 crore."
    },
    {
        "questionId": "Q41",
        "question": "Which natural peril is covered under a standard fire policy?",
        "options": [
            {"id": "A", "text": "Ship damage"},
            {"id": "B", "text": "Aircraft damage"},
            {"id": "C", "text": "Riot and Strike"},
            {"id": "D", "text": "Explosion"},
            {"id": "E", "text": "Storm"}
        ],
        "correctOption": "E",
        "explanation": "In the above options, only storm is a natural peril and is included in standard fire policy."
    },
    {
        "questionId": "Q42",
        "question": "Pure Risk falls within the",
        "options": [
            {"id": "A", "text": "Scope of premium"},
            {"id": "B", "text": "Frame work of business"},
            {"id": "C", "text": "Frame work of management"},
            {"id": "D", "text": "Scope of risk of management"},
            {"id": "E", "text": "Centre of organization"}
        ],
        "correctOption": "D",
        "explanation": null
    },
    {
        "questionId": "Q43",
        "question": "What is the limit of amount deductible under 0.6% franchise clause when sum insured is 1000000?",
        "options": [
            {"id": "A", "text": "Rs. 1000000"},
            {"id": "B", "text": "Rs. 26000"},
            {"id": "C", "text": "Rs. 6000"},
            {"id": "D", "text": "Rs. 3000"},
            {"id": "E", "text": "Rs. 600"}
        ],
        "correctOption": "C",
        "explanation": "It is a clause stipulating that the insured will be responsible for any loss not in excess of a stated amount, and the insurance company will be liable for full payment of the loss equaling or exceeding the amount up to the insured amount. Therefore 1000000x0.6% 6000"
    },
    {
        "questionId": "Q44",
        "question": "Who is exempt from the IRDA prescribed compulsory training for various intermediaries?",
        "options": [
            {"id": "A", "text": "Surveyors"},
            {"id": "B", "text": "TPA'S"},
            {"id": "C", "text": "Brokers"},
            {"id": "D", "text": "Corporate agents"},
            {"id": "E", "text": "Pisk engineers"}
        ],
        "correctOption": "B",
        "explanation": "Only one officer of the TPA firm has to go for training and pass exam."
    },
    {
        "questionId": "Q45",
        "question": "What is also known as endorsement?",
        "options": [
            {"id": "A", "text": "Assignments"},
            {"id": "B", "text": "Stamping of the policy"},
            {"id": "C", "text": "Cover letter"},
            {"id": "D", "text": "Advertisment"},
            {"id": "E", "text": "Policy document"}
        ],
        "correctOption": "E",
        "explanation": "Endorsements are normally used when the terms of an insurance contract are to be varied. Endorsements are attached to the policy document and the two together constitute the evidence of an insurance contract."
    },
    {
        "questionId": "Q46",
        "question": "What is the consignment called which is sent by registered parcel post?",
        "options": [
            {"id": "A", "text": "Air consignment"},
            {"id": "B", "text": "Postal consignment."},
            {"id": "C", "text": "Land consignment"},
            {"id": "D", "text": "Speed consignment"},
            {"id": "E", "text": "Other modes of consignment"}
        ],
        "correctOption": "B",
        "explanation": null
    },
    {
        "questionId": "Q47",
        "question": "Under what are dumpers and tippers insured?",
        "options": [
            {"id": "A", "text": "Heavy Vehicle"},
            {"id": "B", "text": "Marine cargo"},
            {"id": "C", "text": "Motor"},
            {"id": "D", "text": "Marine hull"},
            {"id": "E", "text": "Fire insurance"}
        ],
        "correctOption": "C",
        "explanation": "Passenger or commercial vehicles, light or heavy are insured in motor category."
    },
    {
        "questionId": "Q48",
        "question": "Underwriting returns are required by",
        "options": [
            {"id": "A", "text": "Regional Office"},
            {"id": "B", "text": "General Office"},
            {"id": "C", "text": "General administrative & department"},
            {"id": "D", "text": "Post Office"},
            {"id": "E", "text": "Head Office"}
        ],
        "correctOption": "E",
        "explanation": "The Head office needs to consolidate the specific data."
    },
    {
        "questionId": "Q49",
        "question": "Which policy section deals with damage to insured vehicles?",
        "options": [
            {"id": "A", "text": "Own damage claims"},
            {"id": "B", "text": "Total Loss claims"},
            {"id": "C", "text": "Theft claims"},
            {"id": "D", "text": "Liability claims"},
            {"id": "E", "text": "Towing disabled vehicles"}
        ],
        "correctOption": "A",
        "explanation": null
    },
    {
        "questionId": "Q50",
        "question": "A cover note in motor insurance is valid for ______ days.",
        "options": [
            {"id": "A", "text": "20"},
            {"id": "B", "text": "30"},
            {"id": "C", "text": "45"},
            {"id": "D", "text": "60"},
            {"id": "E", "text": "90"}
        ],
        "correctOption": "D",
        "explanation": "The tariff regulations provide that a cover note is valid for a period of 16 days from the date of issue. It may be extended for a further period of 15 days at a time, but in no case the total period shall exceed two months (60 days)"
    }
],
    "ic11Mock3":[
    {
        "questionId": "Q1",
        "question": "Which type of fire policy covers stocks at various locations under one sum assured?",
        "options": [
            {"id": "A", "text": "Common Policy"},
            {"id": "B", "text": "Declaration Policy"},
            {"id": "C", "text": "Long term policy"},
            {"id": "D", "text": "Floating policy"},
            {"id": "E", "text": "Consequential loss policy"}
        ],
        "correctOption": "D",
        "explanation": "Floating policy covers stocks at various locations under one sum assured."
    },
    {
        "questionId": "Q2",
        "question": "Which of the following is an ex-gratia payment?",
        "options": [
            {"id": "A", "text": "Payment made when policy is cancelled"},
            {"id": "B", "text": "Payment made when risk is not covered under policy"},
            {"id": "C", "text": "Payment made when policy is voided"},
            {"id": "D", "text": "All of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "An ex-gratia payment relates to the event when the claim is not covered but for business reasons, payment is made."
    },
    {
        "questionId": "Q3",
        "question": "In private motor insurance, separate rates apply for vehicles below and above",
        "options": [
            {"id": "A", "text": "800 cc"},
            {"id": "B", "text": "1000 cc"},
            {"id": "C", "text": "1500 cc"},
            {"id": "D", "text": "1800 cc"},
            {"id": "E", "text": "2000 cc"}
        ],
        "correctOption": "C",
        "explanation": null
    },
    {
        "questionId": "Q4",
        "question": "Pricing of insurance products is done by",
        "options": [
            {"id": "A", "text": "Underwriter"},
            {"id": "B", "text": "Surveyor"},
            {"id": "C", "text": "Assessor"},
            {"id": "D", "text": "Risk Engineer"},
            {"id": "E", "text": "Actuary"}
        ],
        "correctOption": "E",
        "explanation": "Actuaries do the pricing of insurance products."
    },
    {
        "questionId": "Q5",
        "question": "Which of the following is not a part of the fundamentals of a contract?",
        "options": [
            {"id": "A", "text": "Offer and Acceptance"},
            {"id": "B", "text": "Consent of the parties"},
            {"id": "C", "text": "Written agreement"},
            {"id": "D", "text": "Legality and being capable of performance"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "A contract does not necessarily have to be in writing."
    },
    {
        "questionId": "Q6",
        "question": "An endorsement follows a request for changes in the policy. Which of the following will not be a subject for an endorsement?",
        "options": [
            {"id": "A", "text": "Cancellation of cover."},
            {"id": "B", "text": "Increase in sum insured"},
            {"id": "C", "text": "Decrease in sum assured"},
            {"id": "D", "text": "Change in renewal date"},
            {"id": "E", "text": "Change in insurer's address"}
        ],
        "correctOption": "E",
        "explanation": "During the period of insurance, there are likely to be times when certain policy details have to be amended. These can arise from a number of incidents including such changes as the following: Personal details-title, insured's address etc. Policy details-change in renewal date, amendment in cover, etc. Coverage details-increase/decrease in sum insured, addition/deletion of items, etc. Cancellation of cover. Change in insurer's address is not subject to an endorsement."
    },
    {
        "questionId": "Q7",
        "question": "When looking for reinsurance, the underwriter works at two levels - one is at risk level and the other is",
        "options": [
            {"id": "A", "text": "Macro"},
            {"id": "B", "text": "Micro"},
            {"id": "C", "text": "Primary"},
            {"id": "D", "text": "Retention"},
            {"id": "E", "text": "Portfolio"}
        ],
        "correctOption": "E",
        "explanation": null
    },
    {
        "questionId": "Q8",
        "question": "A fire deliberately caused by the insured is called _______.",
        "options": [
            {"id": "A", "text": "Accident"},
            {"id": "B", "text": "Arson"},
            {"id": "C", "text": "Immolation"},
            {"id": "D", "text": "Deliberation"},
            {"id": "E", "text": "Malicious Damage"}
        ],
        "correctOption": "B",
        "explanation": "Arson is a criminal offence of burning ones own property to defraud."
    },
    {
        "questionId": "Q9",
        "question": "In Motor Insurance, 'Form A' covers",
        "options": [
            {"id": "A", "text": "Act Liability only"},
            {"id": "B", "text": "Act Liability and Own Damage Losses"},
            {"id": "C", "text": "Own damage losses only"},
            {"id": "D", "text": "Third party losses only"},
            {"id": "E", "text": "Own damage losses and Third party losses"}
        ],
        "correctOption": "B",
        "explanation": null
    },
    {
        "questionId": "Q10",
        "question": "Mr. X has a factory and he fears that excess rains will cause flooding, so he plans to shift the factory's location to a safer place. This is called _______.",
        "options": [
            {"id": "A", "text": "Risk avoidance"},
            {"id": "B", "text": "Risk evaluation"},
            {"id": "C", "text": "Risk identification"},
            {"id": "D", "text": "Risk detection"},
            {"id": "E", "text": "Risk control"}
        ],
        "correctOption": "A",
        "explanation": "It's a risk management technique where in the losses of high severity & high frequency are best dealt in a manner of just avoiding it. No insurer would insure such risk/ losses & none could manage it of its own."
    },
    {
        "questionId": "Q11",
        "question": "In which section of the policy document is the location of property to be insured mentioned?",
        "options": [
            {"id": "A", "text": "Schedule"},
            {"id": "B", "text": "Heading"},
            {"id": "C", "text": "Preamble"},
            {"id": "D", "text": "Conditions"},
            {"id": "E", "text": "Operative clause"}
        ],
        "correctOption": "A",
        "explanation": "The Schedule is the part of the policy document that is specific / unique to each insured person or property. It mentions the Insured's title, address, policy number etc."
    },
    {
        "questionId": "Q12",
        "question": "Premium and claims are shown in accounts on",
        "options": [
            {"id": "A", "text": "Actual basis"},
            {"id": "B", "text": "Gross basis"},
            {"id": "C", "text": "Net basis"},
            {"id": "D", "text": "Claim basis"},
            {"id": "E", "text": "Earned basis"}
        ],
        "correctOption": "B",
        "explanation": "In practice, expenses are deducted from written premiums and the resulting net figure is used to calculate reserves."
    },
    {
        "questionId": "Q13",
        "question": "What is the minimum premium condition?",
        "options": [
            {"id": "A", "text": "Its to cover administrative costs incurred under separate policy"},
            {"id": "B", "text": "Its to cover administrative costs incurred under All in one policy"},
            {"id": "C", "text": "Its to cover administrative costs incurred under each policy"},
            {"id": "D", "text": "Its to cover administrative costs incurred under category policy"},
            {"id": "E", "text": "Its to cover administrative costs incurred under one policy"}
        ],
        "correctOption": "C",
        "explanation": "Its to cover administrative costs incurred under each policy"
    },
    {
        "questionId": "Q14",
        "question": "is the minimum and maximum amount of sum assured allowed for Industrial All Risks insurance.",
        "options": [
            {"id": "A", "text": "100000-10,00,000"},
            {"id": "B", "text": "10,00,000-1,00,00,000"},
            {"id": "C", "text": "1,00,00,000-50,00,00,000"},
            {"id": "D", "text": "50,00,00,000-100,00,00,000"},
            {"id": "E", "text": "100,00,00,000 and above"}
        ],
        "correctOption": "E",
        "explanation": "The Industrial All Risks insurance policy is designed for industrial risks with an overall sum assured of Rs 100 crore and above."
    },
    {
        "questionId": "Q15",
        "question": "In marine insurance, the Special declaration policy can be applied by individual companies having a minimum turnover of Rs",
        "options": [
            {"id": "A", "text": "1 crore"},
            {"id": "B", "text": "2 crore"},
            {"id": "C", "text": "3 crore"},
            {"id": "D", "text": "4 crore"},
            {"id": "E", "text": "5 crore"}
        ],
        "correctOption": "B",
        "explanation": "The Special declaration policy is issued to clients whose annual estimated dispatches (turnover) by rail/road/inland waterways exceeds Rs 2 crore."
    },
    {
        "questionId": "Q16",
        "question": "Motor insurance policy for private or commercial vehicles is also known as",
        "options": [
            {"id": "A", "text": "Vehicle Damage policy"},
            {"id": "B", "text": "Liability only policy"},
            {"id": "C", "text": "Declaration policy"},
            {"id": "D", "text": "Floating policy"},
            {"id": "E", "text": "Accident policy"}
        ],
        "correctOption": "E",
        "explanation": null
    },
    {
        "questionId": "Q17",
        "question": "Floater policies are issued for",
        "options": [
            {"id": "A", "text": "Ships"},
            {"id": "B", "text": "Marine Hull"},
            {"id": "C", "text": "Plant and Machinery"},
            {"id": "D", "text": "Stocks"},
            {"id": "E", "text": "Furniture and fixtures"}
        ],
        "correctOption": "D",
        "explanation": "Floater policies cover stocks at various specific locations under one sum insured."
    },
    {
        "questionId": "Q18",
        "question": "For insurance companies, the acceptance of proposal is done by",
        "options": [
            {"id": "A", "text": "Actuaries"},
            {"id": "B", "text": "Agent"},
            {"id": "C", "text": "Underwriter"},
            {"id": "D", "text": "Insurance Executive"},
            {"id": "E", "text": "Policy holder"}
        ],
        "correctOption": "C",
        "explanation": "After reviewing the proposal papers and the medical reports the underwriter may decide to accept the proposal."
    },
    {
        "questionId": "Q19",
        "question": "As per the regulations of IRDAI, a Surveyor and Loss Assessor should have a",
        "options": [
            {"id": "A", "text": "Proof of Authority"},
            {"id": "B", "text": "Contract"},
            {"id": "C", "text": "License"},
            {"id": "D", "text": "Legal Formality document"},
            {"id": "E", "text": "Policy"}
        ],
        "correctOption": "C",
        "explanation": null
    },
    {
        "questionId": "Q20",
        "question": "What is the kind of protection under which the cumulative effect on the insurer due to losses under various policies will be ascertained?",
        "options": [
            {"id": "A", "text": "Per risk protection"},
            {"id": "B", "text": "Per premium protection"},
            {"id": "C", "text": "Per insurance protection"},
            {"id": "D", "text": "Per event protection"},
            {"id": "E", "text": "Per damage protection"}
        ],
        "correctOption": "B",
        "explanation": null
    },
    {
        "questionId": "Q21",
        "question": "How are rates of premium quoted for Fire and miscellaneous insurance?",
        "options": [
            {"id": "A", "text": "Weekly basis"},
            {"id": "B", "text": "Monthly basis"},
            {"id": "C", "text": "Quarterly basis"},
            {"id": "D", "text": "Six monthly basis"},
            {"id": "E", "text": "Annual basis"}
        ],
        "correctOption": "E",
        "explanation": "Rates are always annual and short term premium is also calculated on the same."
    },
    {
        "questionId": "Q22",
        "question": "What has to be duly maintained for efficient management of cover notes?",
        "options": [
            {"id": "A", "text": "Balance Sheet"},
            {"id": "B", "text": "Cash Book"},
            {"id": "C", "text": "Ledger"},
            {"id": "D", "text": "Register"},
            {"id": "E", "text": "Journal"}
        ],
        "correctOption": "D",
        "explanation": "Just like Policy and Claim register, Cover Note register helps in efficient management."
    },
    {
        "questionId": "Q23",
        "question": "The questions on Circumstances and Date of incident form a part of _______.",
        "options": [
            {"id": "A", "text": "Contract form"},
            {"id": "B", "text": "Claim form"},
            {"id": "C", "text": "Proposal form"},
            {"id": "D", "text": "Policy form"},
            {"id": "E", "text": "Renewal Notice"}
        ],
        "correctOption": "B",
        "explanation": "The Claim form will ask for details like : - Name -Policy Number - Date and Time of incident - Location of incident -Circumstances of the incident etc."
    },
    {
        "questionId": "Q24",
        "question": "Workmen's compensation act provides insurance for which of the following liabilities?",
        "options": [
            {"id": "A", "text": "Loss due to floods or fire"},
            {"id": "B", "text": "Liabilities in respect of railways as carrier of goods"},
            {"id": "C", "text": "Payment by employers to their employees a compensation for injury by accident in course of employment"},
            {"id": "D", "text": "Payment of compensation to employees for injury by accident in course of employment"},
            {"id": "E", "text": "Loss, mis-delivery or damage of any postal article"}
        ],
        "correctOption": "D",
        "explanation": "Workmen's Compensation Act covers employer against legal liability for death and disability of his employees."
    },
    {
        "questionId": "Q25",
        "question": "All parties to insurance contract are subject to the principle of _______.",
        "options": [
            {"id": "A", "text": "Utmost good promise"},
            {"id": "B", "text": "Utmost good honesty"},
            {"id": "C", "text": "Utmost good loyalty"},
            {"id": "D", "text": "Utmost good truthfulness"},
            {"id": "E", "text": "Utmost good faith"}
        ],
        "correctOption": "E",
        "explanation": "Utmost good faith is one the important principle on which insurance is based."
    },
    {
        "questionId": "Q26",
        "question": "What pattern does the procedure in respect of claims under various classes of insurance follow?",
        "options": [
            {"id": "A", "text": "Common Pattern"},
            {"id": "B", "text": "Special Pattem"},
            {"id": "C", "text": "Modular Pattern"},
            {"id": "D", "text": "Fixed Pattern"},
            {"id": "E", "text": "Analytical Pattern"}
        ],
        "correctOption": "A",
        "explanation": "The claim process is a relatively consistent process involving a number of well defined steps so as to provide efficient customer service and meet the needs of the customer."
    },
    {
        "questionId": "Q27",
        "question": "Motor vehicles are classified into _______ major categories.",
        "options": [
            {"id": "A", "text": "1"},
            {"id": "B", "text": "2"},
            {"id": "C", "text": "3"},
            {"id": "D", "text": "4"},
            {"id": "E", "text": "5"}
        ],
        "correctOption": "C",
        "explanation": "The categories are Car, Two wheelers and Commercial vehicles."
    },
    {
        "questionId": "Q28",
        "question": "All insurers can invest only in those investments which are approved under",
        "options": [
            {"id": "A", "text": "IRDA"},
            {"id": "B", "text": "Investment Act"},
            {"id": "C", "text": "Companies Act"},
            {"id": "D", "text": "Stock Broking Act"},
            {"id": "E", "text": "Sale of Goods Act"}
        ],
        "correctOption": "A",
        "explanation": "In India, the investment structure for insurance premium is laid down very clearly under the Insurance Regulatory and Development Authority (Investment) Regulations, 2000"
    },
    {
        "questionId": "Q29",
        "question": "On what does the Carriage of goods by sea act determine the liability?",
        "options": [
            {"id": "A", "text": "Marine port warehouse receipt"},
            {"id": "B", "text": "Transporters challan"},
            {"id": "C", "text": "Airways bill"},
            {"id": "D", "text": "Bill of Lading"},
            {"id": "E", "text": "Railway receipt"}
        ],
        "correctOption": "D",
        "explanation": "A bill of lading is a legal document between the shipper of goods and the carrier detailing the type, quantity and destination of the goods being carried."
    },
    {
        "questionId": "Q30",
        "question": "With a minimum premium of Rs 15, what is the sum assured offered in a Janta Personal Accident policy?",
        "options": [
            {"id": "A", "text": "Rs 20000"},
            {"id": "B", "text": "Rs 22500"},
            {"id": "C", "text": "Rs 25000"},
            {"id": "D", "text": "Rs 27500"},
            {"id": "E", "text": "Rs 30000"}
        ],
        "correctOption": "C",
        "explanation": "In Janta Personal Accident policy the minimum sum insured is Rs 25000/- and maximum Rs 1,00,000/- per person per annum. The rate of premium is Rs 15/- per sum assured of Rs 25000/- which can be increased in multiples of Rs 25,000/-."
    },
    {
        "questionId": "Q31",
        "question": "Vessels under steam or pressure, boilers, steam pipes, air receivers etc. are insurable under",
        "options": [
            {"id": "A", "text": "Vessels insurance"},
            {"id": "B", "text": "Fire insurance"},
            {"id": "C", "text": "Engineering insurance"},
            {"id": "D", "text": "Boiler insurance"},
            {"id": "E", "text": "Marine insurance"}
        ],
        "correctOption": "D",
        "explanation": "Boiler and Pressure Plant insurance policy covers damage, other than fire, to boilers and/or other pressure plant and surrounding property."
    },
    {
        "questionId": "Q32",
        "question": "What is the term used for the retention risk that an insurer would like to keep?",
        "options": [
            {"id": "A", "text": "Reinsurance limit"},
            {"id": "B", "text": "Excess limit"},
            {"id": "C", "text": "Marginal limit"},
            {"id": "D", "text": "Base limit"},
            {"id": "E", "text": "Underlying limit"}
        ],
        "correctOption": "E",
        "explanation": null
    },
    {
        "questionId": "Q33",
        "question": "The indemnity of _______ is covered under the refrigeration plant insurance.",
        "options": [
            {"id": "A", "text": "Shopping Malls"},
            {"id": "B", "text": "Factories"},
            {"id": "C", "text": "Warehouses"},
            {"id": "D", "text": "Cold storage"},
            {"id": "E", "text": "Godowns"}
        ],
        "correctOption": "D",
        "explanation": null
    },
    {
        "questionId": "Q34",
        "question": "For what is the 'Premium Register Copy' must for?",
        "options": [
            {"id": "A", "text": "Underwriting premium"},
            {"id": "B", "text": "Underwriting loans"},
            {"id": "C", "text": "Underwriting services"},
            {"id": "D", "text": "Underwriting balance sheet"},
            {"id": "E", "text": "Underwriting returns"}
        ],
        "correctOption": "E",
        "explanation": "The primary business of an insurance company is generating premium income & paying claims. Payment of claims is the prime reason why the insurers are in business. Underwriting returns are computed on the basis of premium register."
    },
    {
        "questionId": "Q35",
        "question": "Which is one main important provision of insurance Act?",
        "options": [
            {"id": "A", "text": "Claiming"},
            {"id": "B", "text": "Application"},
            {"id": "C", "text": "Filing"},
            {"id": "D", "text": "Registration"},
            {"id": "E", "text": "Enrolment"}
        ],
        "correctOption": "A",
        "explanation": null
    },
    {
        "questionId": "Q36",
        "question": "Which part of the insurance policy introduces the Insurer and Insured?",
        "options": [
            {"id": "A", "text": "Heading"},
            {"id": "B", "text": "Preamble"},
            {"id": "C", "text": "Operative Clause"},
            {"id": "D", "text": "Contractual Clause"},
            {"id": "E", "text": "Signature"}
        ],
        "correctOption": "B",
        "explanation": "The Preamble includes the names of different parties to the contract the insured and the company providing the insurance."
    },
    {
        "questionId": "Q37",
        "question": "Under which act have the insurance agents to be licensed?",
        "options": [
            {"id": "A", "text": "RBI Act"},
            {"id": "B", "text": "Insurance Act"},
            {"id": "C", "text": "IRDAI Act"},
            {"id": "D", "text": "GIC Act"},
            {"id": "E", "text": "CLIC Act"}
        ],
        "correctOption": "B",
        "explanation": null
    },
    {
        "questionId": "Q38",
        "question": "Speculation risk is also known as",
        "options": [
            {"id": "A", "text": "Stock Market risk"},
            {"id": "B", "text": "Insured risk"},
            {"id": "C", "text": "Trade risk"},
            {"id": "D", "text": "Business risk"},
            {"id": "E", "text": "Declined risk"}
        ],
        "correctOption": "C",
        "explanation": "Trade risk"
    },
    {
        "questionId": "Q39",
        "question": "The full form of ALOP is",
        "options": [
            {"id": "A", "text": "Advance Loss of Price Policy"},
            {"id": "B", "text": "Advance Loss of Profit Policy"},
            {"id": "C", "text": "Advance Loss of Property Policy."},
            {"id": "D", "text": "Advance Loss of Pension Policy"},
            {"id": "E", "text": "Advance Loss of Penalty Policy"}
        ],
        "correctOption": "B",
        "explanation": "Advance Loss Of Profit (ALOP) Insurance"
    },
    {
        "questionId": "Q40",
        "question": "ERF contribution forms part of which act liability?",
        "options": [
            {"id": "A", "text": "Public liability act"},
            {"id": "B", "text": "Insurance Act"},
            {"id": "C", "text": "Workmen Compensation Act"},
            {"id": "D", "text": "Motor Vehicle Act"},
            {"id": "E", "text": "Marine Insurance Act"}
        ],
        "correctOption": "A",
        "explanation": "An amount equal to premium is to be paid to insurer for contribution to Environment Relief Fund (ERF) which pays relief."
    },
    {
        "questionId": "Q41",
        "question": "Which policy is issued in conjunction with ALOP policy?",
        "options": [
            {"id": "A", "text": "Boiler and Pressure Plant Insurance"},
            {"id": "B", "text": "Machinery Breakdown Insurance"},
            {"id": "C", "text": "Marine hull Insurance"},
            {"id": "D", "text": "Erection/construction insurance"},
            {"id": "E", "text": "Deterioration of Stock Insurance"}
        ],
        "correctOption": "D",
        "explanation": "Advance Loss of Profit (ALOP) Policy Then main objective of this policy is to idemnify the principal for the actual loss sustained due to delay in commencement of commercial operation of a new project under installation construction This is a highly specialised type of policy which is drafted specifically in each case."
    },
    {
        "questionId": "Q42",
        "question": "What is not an implied condition of insurance?",
        "options": [
            {"id": "A", "text": "Contribution"},
            {"id": "B", "text": "Legality of object"},
            {"id": "C", "text": "Insurable interest"},
            {"id": "D", "text": "Existence of subject matter"},
            {"id": "E", "text": "Utmost good faith"}
        ],
        "correctOption": "A",
        "explanation": null
    },
    {
        "questionId": "Q43",
        "question": "Agricultural Insurance Corporation takes care of",
        "options": [
            {"id": "A", "text": "Pesticides and Fertilizers"},
            {"id": "B", "text": "Agro chemicals"},
            {"id": "C", "text": "Crop"},
            {"id": "D", "text": "Farmers"},
            {"id": "E", "text": "Investment in agricultural business"}
        ],
        "correctOption": "C",
        "explanation": null
    },
    {
        "questionId": "Q44",
        "question": "In to how many broad categories are the vehicles classified in motor insurance?",
        "options": [
            {"id": "A", "text": "1"},
            {"id": "B", "text": "2"},
            {"id": "C", "text": "3"},
            {"id": "D", "text": "4"},
            {"id": "E", "text": "5"}
        ],
        "correctOption": "C",
        "explanation": "For the purpose of insurance, motor vehicles are classified into 3 broad categories: Private Cars, Motor Cycles / Scooters and Commercial Vehicles."
    },
    {
        "questionId": "Q45",
        "question": "What is the final process know as where the selected techniques have to be implemented by the firm through the different functional managers?",
        "options": [
            {"id": "A", "text": "Management of Risks"},
            {"id": "B", "text": "Voluntary deductibles"},
            {"id": "C", "text": "Risk retention"},
            {"id": "D", "text": "Implementation"},
            {"id": "E", "text": "Risk evaluation"}
        ],
        "correctOption": "D",
        "explanation": null
    },
    {
        "questionId": "Q46",
        "question": "One way in which traders can suffer losses is",
        "options": [
            {"id": "A", "text": "Insolvency or default in payments by vendors"},
            {"id": "B", "text": "insolvency or default in payments by suppliers"},
            {"id": "C", "text": "insolvency or default in payments by exporters"},
            {"id": "D", "text": "insolvency or default in payments by consumers"},
            {"id": "E", "text": "insolvency or default in payments by buyers"}
        ],
        "correctOption": "E",
        "explanation": "The trader sells goods to the buyers and if the buyers do not make payments, the traders suffer losses."
    },
    {
        "questionId": "Q47",
        "question": "The most common methods of fixing premium rates is by classification of",
        "options": [
            {"id": "A", "text": "Damages"},
            {"id": "B", "text": "Risks"},
            {"id": "C", "text": "Policy"},
            {"id": "D", "text": "Loss"},
            {"id": "E", "text": "Claims"}
        ],
        "correctOption": "B",
        "explanation": "The expense premium depends on the classes of risks."
    },
    {
        "questionId": "Q48",
        "question": "What are the maximum reimbursement expenses for a damaged motorcycle's towing charges?",
        "options": [
            {"id": "A", "text": "Rs 100"},
            {"id": "B", "text": "Rs 300"},
            {"id": "C", "text": "Rs 500"},
            {"id": "D", "text": "Rs 750"},
            {"id": "E", "text": "Rs 1000"}
        ],
        "correctOption": "B",
        "explanation": "Towing Charges: For motorcycle this limit is Rs 300 and for commercial vehicles its Rs 2500."
    },
    {
        "questionId": "Q49",
        "question": "A catastrophic event can cause huge strain on the _______ funds.",
        "options": [
            {"id": "A", "text": "Insured"},
            {"id": "B", "text": "Insurer"},
            {"id": "C", "text": "Solatlum"},
            {"id": "D", "text": "Underwriters"},
            {"id": "E", "text": "Contingency"}
        ],
        "correctOption": "B",
        "explanation": "A catastrophe is an event causing great and usually sudden damage or suffering. Such events cause big strains on the insurers funds as a lot of claims come up for payments. For eg-Big earth quakes, terrorist strikes like attack on World Trade Center buildings etc."
    },
    {
        "questionId": "Q50",
        "question": "Which of these options is dissimilar in personal accident insurance?",
        "options": [
            {"id": "A", "text": "On duty"},
            {"id": "B", "text": "Off duty"},
            {"id": "C", "text": "24 hours hospitalisation"},
            {"id": "D", "text": "India"},
            {"id": "E", "text": "Worldwide"}
        ],
        "correctOption": "C",
        "explanation": "Personal accident covers for India and even stay abroad, off duty and even on duty. 24 hours as requirement to stay hospitalised is for Mediclaim and not Personal accident."
    }
],
    "ic11Mock4":[
    {
        "questionId": "Q1",
        "question": "What is the condition prescribing under-insurance called?",
        "options": [
            {"id": "A", "text": "Condition of average"},
            {"id": "B", "text": "Condition of minimum"},
            {"id": "C", "text": "Condition of sum"},
            {"id": "D", "text": "Condition of count"},
            {"id": "E", "text": "Condition of maximum"}
        ],
        "correctOption": "A",
        "explanation": "Underinsurance can arise for a variety of reasons, although is usually a result of the policyholder incorrectly assessing the value at risk, or specifying a sum insured limit that was inadequate for their needs. The condition prescribing underinsurance is \"Condition of Average\"."
    },
    {
        "questionId": "Q2",
        "question": "As per IRDA, communication with the policy holder should be transparent and clear. Decide if it's advisable.",
        "options": [
            {"id": "A", "text": "Too much clarity and transparency is not to be encouraged as it creates severe administrative difficulties."},
            {"id": "B", "text": "Too much transparency is not at all a good practice as it has led to large number of frauds"},
            {"id": "C", "text": "Clarity in every communication is simply Impossible to every insured, as insurance is a technical subject."},
            {"id": "D", "text": "The significance of appropriate communication instead of transparent and clear communication, is a subject of confusion for IRDA itself"},
            {"id": "E", "text": "It avoids confusion and misunderstanding and has established trust, thereby being the best policy."}
        ],
        "correctOption": "E",
        "explanation": "Clear and transparent communications play a vital role in servicing of insurance policies and in ensuring that the benefits of insurance policies flow to the beneficiaries in a timely manner."
    },
    {
        "questionId": "Q3",
        "question": "Identify the principal action to be taken by an insured person regarding a claim settlement.",
        "options": [
            {"id": "A", "text": "In case of fire insurance to sell the remaining goods"},
            {"id": "B", "text": "Wait for complete damage to the property"},
            {"id": "C", "text": "Agree on mutual settlement with caused party to recover the damage"},
            {"id": "D", "text": "Notify the insurer immediately"},
            {"id": "E", "text": "Get repairs done to the accidental vehicle before claim"}
        ],
        "correctOption": "D",
        "explanation": "The responsibility of proving that a claim falls not just within the policy terms but also that all the claim conditions are fulfilled, is entirely the insureds. The insured should issue a notice to the insurer immediately"
    },
    {
        "questionId": "Q4",
        "question": "________ is not applied on the base rate in Technical and Burning Cost methods.",
        "options": [
            {"id": "A", "text": "Trend Adjustment"},
            {"id": "B", "text": "Reinsurance Cost"},
            {"id": "C", "text": "Profit"},
            {"id": "D", "text": "Commission"},
            {"id": "E", "text": "Risk Improvement Cost"}
        ],
        "correctOption": "E",
        "explanation": "The option that is not applied on the base rate in Technical and Burning Cost methods is Risk Improvement Cost. The other options, such as profit, commission, trends adjustment, and reinsurance cost, are typically considered when calculating the base rate for insurance pricing."
    },
    {
        "questionId": "Q5",
        "question": "In a situation where an underwriter's commitment in an area is close to his accumulation limits, he will",
        "options": [
            {"id": "A", "text": "stop doing insurance completely for the rest of the year"},
            {"id": "B", "text": "stop taking any further proposals for the cover from the area"},
            {"id": "C", "text": "immediately cancel some of the policies to reduce his exposure"},
            {"id": "D", "text": "immediately try to personally ask other insurers to insure the extra risks"},
            {"id": "E", "text": "call a meeting of all distribution agencies and ask them not to report any claim from the area"}
        ],
        "correctOption": "B",
        "explanation": "In a situation where an underwriter's commitment in an area is close to his accumulation limits, he will stop taking any further proposals for the cover from the area. This approach helps manage risk and prevents exceeding accumulation limits while still maintaining the existing policies in force."
    },
    {
        "questionId": "Q6",
        "question": "Identity the incorrect statement with reference to Pedal cycle insurance.",
        "options": [
            {"id": "A", "text": "Theft is covered"},
            {"id": "B", "text": "Earthquake is covered"},
            {"id": "C", "text": "Lightning is covered"},
            {"id": "D", "text": "Burglary is covered"},
            {"id": "E", "text": "Fire is covered"}
        ],
        "correctOption": "B",
        "explanation": "Pedal Cycle Insurance policy covers loss of or darnage to the cycle by fire, lightning, explosion, burglary, housebreaking, theft and accidental external means. It also covers the insured's legal liability for bodily injury to third parties and for the loss of or damage to the property of third parties. The policy may be extended to cover personal accident insurance benefits on payment of additional premium. Earthquake is not covered under Pedal Cycle insurance policy and therefore option (2) is the INCORRECT statement"
    },
    {
        "questionId": "Q7",
        "question": "Which of the following conditions is necessary to be fulfilled to become a direct broker?",
        "options": [
            {"id": "A", "text": "Attain minimum age of 21"},
            {"id": "B", "text": "Must have passed NCFM module"},
            {"id": "C", "text": "Must have passed AMFI module"},
            {"id": "D", "text": "License Issued by IRDAJ regulation"},
            {"id": "E", "text": "License issued by National Insurance Academy"}
        ],
        "correctOption": "D",
        "explanation": "Obtaining a license from the Insurance Regulatory and Development Authority of india (IRDAI) is essential for operating as a direct broker. The insurance Regulatory and Development Authority of India (IRDAI) oversees the licensing and regulation process."
    },
    {
        "questionId": "Q8",
        "question": "The SIC codes system classifies the Trade codes in which of the following numbers?",
        "options": [
            {"id": "A", "text": "1"},
            {"id": "B", "text": "11"},
            {"id": "C", "text": "9"},
            {"id": "D", "text": "5"},
            {"id": "E", "text": "1"}
        ],
        "correctOption": "D",
        "explanation": "Standard Industrial Classification (SIC) codes: This system classifies the Trade Codes in a 5 digit number."
    },
    {
        "questionId": "Q9",
        "question": "Why has IRDA mandated IIB Burning cost?",
        "options": [
            {"id": "A", "text": "To ensure that it can be used for specified lines of business only"},
            {"id": "B", "text": "So that if used, it can be adjusted for individual experience"},
            {"id": "C", "text": "So that it can be used for all lines of business"},
            {"id": "D", "text": "Burning cost is voluntary and not mandatory"},
            {"id": "E", "text": "To be strictly used only with the particular risk, no matter what their personal experience"}
        ],
        "correctOption": "D",
        "explanation": "IRDAI has clarified that it does not mandate any minimum rate for premium setting by insurance and reinsurance companies. It has come to the notice of IRDAI that policyholders are being led to believe that the Burning Cost released by Insurance Information Bureau of India (IIB) is 'minimum mandated rate'. Industry Burning Cost is only a reference point to understand claims experience in fire perils across the industry. It is not to be construed as a minimum mandated rate laid down by IRDAI. A circular clarifying the same has been issued on 12th May, 2022 reiterating to the insurance companies the purpose of publishing the industry Burning Cost by IIB. The insurance companies have also been advised to ensure that there is no mis-information to policyholders and other stakeholders regarding the same."
    },
    {
        "questionId": "Q10",
        "question": "Is liability insurance required by government owned vehicles?",
        "options": [
            {"id": "A", "text": "It is not required by the government to insure anything"},
            {"id": "B", "text": "Governments of other countries insure government owned vehicles"},
            {"id": "C", "text": "Vehicles operating in public places must be insured, without any kind of exception whatsoever"},
            {"id": "D", "text": "As per Motor Vehicle Act, governments do not have any liability to compensate anyone"},
            {"id": "E", "text": "Government itself becomes its insurer and compensates from its funds, as the government on vehicle is a public property"}
        ],
        "correctOption": "C",
        "explanation": "Under the Motor Vehicles Act, all vehicles operating in public places, including government-owned vehicles, are required to have liability insurance to cover damages to third parties in case of an accident."
    },
    {
        "questionId": "Q11",
        "question": "Under which conditions, cash kept in a safe is covered, as per burglary Insurance?",
        "options": [
            {"id": "A", "text": "Cash is never covered"},
            {"id": "B", "text": "Cash which is kept in a locked safe"},
            {"id": "C", "text": "Cash which is kept in an approved safe"},
            {"id": "D", "text": "Cash insured in an approved and locked safe with records kept elsewhere"},
            {"id": "E", "text": "Cash which is kept in unlocked approved safe"}
        ],
        "correctOption": "D",
        "explanation": "Under a burglary insurance, cash cover operates only when the cash is secured in a safe and is granted only if the safe is burglar proof and is of an approved make and design. The cover is granted subject to certain clauses known as \"key clause\". A complete list of the amounts of cash in safe should be kept secure in some place other than the safe, and the liability of the insurer is limited to the amount actually shown by such records"
    },
    {
        "questionId": "Q12",
        "question": "A short circuit in an Air Circuit Breaker (ACB) panel at a power plant caused burning of the control room. Will the loss be covered under the Standard Fire and Special Perils Policy (SFSPP)?",
        "options": [
            {"id": "A", "text": "A new ACB panel will have to be paid for"},
            {"id": "B", "text": "Under the SFSPP, the entire loss would be payable"},
            {"id": "C", "text": "The reinstatement cost of the entire control room will have to be paid by the insurer."},
            {"id": "D", "text": "Excluding the ACB, loss will be payable"},
            {"id": "E", "text": "Since the cause of loss is electrical breakdown, such loss is not payable"}
        ],
        "correctOption": "D",
        "explanation": "The perils specified in the Standard Fire and Special Perils Policy are Fire, Lightning, Explosion/Implosion, Aircraft damage, Riot, Strike and Malicious Damage. The Standard Fire and Special Perils Policy (SFSPP) typically excludes losses caused directly by electrical breakdown or short circuiting. However, if the fire caused by the short circuit damaged other parts of the control room, those damages would generally be covered, excluding the ACB itself."
    },
    {
        "questionId": "Q13",
        "question": "According to the Motor Vehicles Rules, which of the following formats is used for the certificate of insurance?",
        "options": [
            {"id": "A", "text": "Form No. 54"},
            {"id": "B", "text": "Form No. 53"},
            {"id": "C", "text": "Form No. 51"},
            {"id": "D", "text": "Form No. 52"},
            {"id": "E", "text": "Form No. 50"}
        ],
        "correctOption": "C",
        "explanation": "The Insurance Policy Certificate should be issued in the format stated in Form 51, which contains all the vital details about the vehicle, policyholder and motor insurance policy."
    },
    {
        "questionId": "Q14",
        "question": "Which of the following conditions is termed as 'last straw' in insurance markets?",
        "options": [
            {"id": "A", "text": "The final event which convinces all that now soft market is to be the way forward"},
            {"id": "B", "text": "The condition where the last reinsurer is left in the market"},
            {"id": "C", "text": "Generally, a catastrophic event which leads to hard market"},
            {"id": "D", "text": "It is the insured's demand for the final bit of discount in any negotiation"},
            {"id": "E", "text": "The condition which breaks the camel's back"}
        ],
        "correctOption": "C",
        "explanation": "Some insurers start to get concerned that if they do not cut prices even more, they will lose market share. The spiral continues until there is no more room to cut prices and the \"hard market\" starts. There is usually a severe catastrophe connected with the end of this market, acting as a catalyst or \"the last straw\" to make the change."
    },
    {
        "questionId": "Q15",
        "question": "Which of the following Acts was amended in 2015?",
        "options": [
            {"id": "A", "text": "Motor Vehicles Act"},
            {"id": "B", "text": "Marine Insurance Act"},
            {"id": "C", "text": "Indian Stamps Act"},
            {"id": "D", "text": "Insurance Act"},
            {"id": "E", "text": "Carriers Act"}
        ],
        "correctOption": "A",
        "explanation": "The Motor Vehicle Act was amended in 2016. The objective of the Act is to further amend the provisions of the Motor Vehicle Act, 1988 and replace the Motor Vehicles (Amendment) Ordinance, 2015. The Act provides for following amendments in the Motor Vehicle Act, 1988: insertion of a new Section 2A, which brings e-carts and e-rickshaws under the ambit of Motor Vehicle Act. Also amendments in Section 7, 9, 27 regarding e-cart or e-rickshaw"
    },
    {
        "questionId": "Q16",
        "question": "While calculating risk part of proposed property Insurance _________ is not considered by Gruha Ltd's underwriter.",
        "options": [
            {"id": "A", "text": "Risk management philosophy."},
            {"id": "B", "text": "Causes of loss to which property is exposed"},
            {"id": "C", "text": "Frequency of natural calamities"},
            {"id": "D", "text": "Gender"},
            {"id": "E", "text": "Construction quality"}
        ],
        "correctOption": "D",
        "explanation": "Property insurance policies cover the property from natural calamities like floods, earthquakes, tsunamis, storms, and infestation and man-made factors like terrorism, theft and burglary, fire, and accidents are also covered. While calculating risk for proposed property insurance, gender is typically not considered by the underwriter. Risk factors like management philosophy, causes of loss, frequency of natural calamities, and construction quality are much more relevant."
    },
    {
        "questionId": "Q17",
        "question": "________ is generally not a major component of an insurance company's expenses.",
        "options": [
            {"id": "A", "text": "Manpower expenses"},
            {"id": "B", "text": "Infra release/rent"},
            {"id": "C", "text": "Claim expenses"},
            {"id": "D", "text": "Conveyance charges"},
            {"id": "E", "text": "Commission"}
        ],
        "correctOption": "D",
        "explanation": "Generally, Conveyance charges is not considered a major component of an insurance company's expenses. While it can be a cost, it typically doesn't compare to the more significant expenses like claim expenses, manpower expenses, commissions, and infrastructure costs (like renti."
    },
    {
        "questionId": "Q18",
        "question": "A professional indemnities policy does not usually cover the profession of a",
        "options": [
            {"id": "A", "text": "Medical practitioner"},
            {"id": "B", "text": "Interior decorator"},
            {"id": "C", "text": "Solicitor"},
            {"id": "D", "text": "Chartered Engineer"},
            {"id": "E", "text": "Priest"}
        ],
        "correctOption": "E",
        "explanation": "Professional indemnities are designed to provide insurance protection to professionals against their legal liability to pay damages arising out of negligence in performance of their professional duties. Such professionals can be doctors/medical practitioners; medical establishments; engineers, architects and interior decorators; chartered accountants, financial consultants, management consultarits, and lawyers, advocates, solicitors and counsel."
    },
    {
        "questionId": "Q19",
        "question": "The insured will approach the Consumer Forum",
        "options": [
            {"id": "A", "text": "When he wants Insurance company to pay his claim in spite of being aware that it's not payable."},
            {"id": "B", "text": "When not satisfied with the insurance company services"},
            {"id": "C", "text": "If he intends to force Insurers to pay higher claim amount"},
            {"id": "D", "text": "When he intends to expose insurance frauds"},
            {"id": "E", "text": "In case insurance companies fall short of funds"}
        ],
        "correctOption": "B",
        "explanation": "If the insured is not satisfied with the services of the insurance company, he may, walk into any office of the insurer and lodge a complaint Or Approach the Grievance Redressal Officer (GRO) of the Insurance company."
    },
    {
        "questionId": "Q20",
        "question": "What is AOA in insurance?",
        "options": [
            {"id": "A", "text": "Accident Occurrence Authority"},
            {"id": "B", "text": "Accident Over Accident"},
            {"id": "C", "text": "Any Occurrence Accident"},
            {"id": "D", "text": "Any One Occurrence"},
            {"id": "E", "text": "Any One Accident"}
        ],
        "correctOption": "E",
        "explanation": "In Public Liability Policy, the sum insured is referred to as Limit of Indemnity. This limit is fixed per accident and per policy period which is called Any One Accident (AOA) limit and Any One Year (AOY) limit respectively."
    },
    {
        "questionId": "Q21",
        "question": "If Amar sends goods to Nilesh on CIF (cost, insurance and freight) basis. _______ has to arrange the insurance and in case any loss arises during transit then. _______ is entitled to get the compensation from the insurance company.",
        "options": [
            {"id": "A", "text": "Amar & Nilesh"},
            {"id": "B", "text": "Amar & Aman Nilesh"},
            {"id": "C", "text": "Nilesh & Amar"},
            {"id": "D", "text": "Amar & Amar"},
            {"id": "E", "text": "Neither loss nor compensation needs to be paid by either party"}
        ],
        "correctOption": "A",
        "explanation": "Since the seller pays the shipping, freight, and insurance costs until the cargo arrives at the buyer's destination port, the cost transfer occurs when the goods have arrived at the buyer's port. However, the risk transfer occurs from the seller to the buyer when the goods have been loaded on the vessel. Although the seller must purchase insurance, the buyer has ownership of the goods once loaded onto the ship, and if the goods have been damaged during transit, the buyer must file a claim with the seller's insurance company."
    },
    {
        "questionId": "Q22",
        "question": "The full form of IRDAI is",
        "options": [
            {"id": "A", "text": "Insurance Regulatory & Development Association of India"},
            {"id": "B", "text": "Insurance Reform & Development Authority of India"},
            {"id": "C", "text": "Insurance Regulatory & Desired Authority of India"},
            {"id": "D", "text": "Insurance Research & Development Authority of India"},
            {"id": "E", "text": "Insurance Regulatory & Development Authority of India"}
        ],
        "correctOption": "E",
        "explanation": "Based on the Malhotra Committee Report, the insurance Regulatory and Development Authority (IRDA) Act, 1999 was passed in December 1999 and the Insurance Regulatory and Development Authority (IRDA) was established to regulate, promote and ensure orderly growth of the insurance and reinsurance business."
    },
    {
        "questionId": "Q23",
        "question": "________ is not covered under a Preamble component of an insurance policy.",
        "options": [
            {"id": "A", "text": "Consideration"},
            {"id": "B", "text": "Sum insured"},
            {"id": "C", "text": "Insuring clause"},
            {"id": "D", "text": "Name of parties entered into contract"},
            {"id": "E", "text": "Premium"}
        ],
        "correctOption": "C",
        "explanation": "Amongst the policy components, Preamble is generally similar throughout the market. It consists of four main points: 1. The proposal form and any questionnaire are part of the contract and are incorporated within it. Therefore, the insured must be particularly careful when completing these, 2. The Sum Insured. 3. The premium is mentioned. 4. The preamble states that the insurer will provide the cover as agreed. 5. Names of the different parties to the contract-the insured person and the company providing the insurance."
    },
    {
        "questionId": "Q24",
        "question": "Paresh has property valued at Rs.35 Lakhs, for which property Insurance of Rs.30 Lakhs has been taken by him. He has incurred Rs.10 Lakhs property damage. The amount payable by the insurance company as compensation is",
        "options": [
            {"id": "A", "text": "Rs. 30 Lakhs"},
            {"id": "B", "text": "Rs.8.57 Lakhs"},
            {"id": "C", "text": "Rs.30 Lakhs"},
            {"id": "D", "text": "Rs 10 Lakhs"},
            {"id": "E", "text": "Rs. 2 Lakhs"}
        ],
        "correctOption": "B",
        "explanation": "An insured is expected to insure his property for its full value. In the event of ciaim if it is found that he has not covered the property for its full value, then he has to bear a portion of the claim for his own account. In the above example: Value of Property Rs. 35,00,000 Sum insured Rs. 30,00,000 Loss Rs. 10,00,000 The amount payable by the insurance company as compensation is calculated by the following formula: Compensation Damage incurred x (Insured Value/Actual Value?) 10,00,000 X (30,00,000/35,00,000) = Rs. 8.57 Lakhs"
    },
    {
        "questionId": "Q25",
        "question": "________ was passed based on the Malhotra Committee report.",
        "options": [
            {"id": "A", "text": "Life Insurance Corporation Act 1857"},
            {"id": "B", "text": "The insurance Act 1932"},
            {"id": "C", "text": "Public liability insurance rules 1991"},
            {"id": "D", "text": "The Insurance Regulatory and Development Authority Act (IRDAI) 1999"},
            {"id": "E", "text": "General Insurance business Amendment Act 2002"}
        ],
        "correctOption": "D",
        "explanation": "Based on the Malhotra Committee Report the Insurance Regulatory and Development Authority (IRDA) Act, 1999 was passed in December 1999 and The Insurance Regulatory and Development Authority (IRDA) was established to regulate, promote and ensure orderly growth of the insurance and reinsurance business."
    },
    {
        "questionId": "Q26",
        "question": "What is Malus in Motor insurance?",
        "options": [
            {"id": "A", "text": "It is a discount calculated up to a maximum 100% on entire fleet, rather than individual vehicles"},
            {"id": "B", "text": "It is not followed in Indian markets."},
            {"id": "C", "text": "It is never required to be applied"},
            {"id": "D", "text": "Loading calculated on a fleet basis and applied uniformly over all vehicles upto maximum 200%"},
            {"id": "E", "text": "Applying isading as per a declared schedule on the vehicles for high claim experience"}
        ],
        "correctOption": "E",
        "explanation": "There is also a reverse scenario where insurers load the premiums as per a published schedule when the claims experience is bad. Such loading of premium when the claims experience is poor is known as Loading/Malus. Conditions when such loadings are done and the amount of loading are disclosed in advance. In many situations, certain caps are imposed on the loading. Indian Motor insurance, for instance, caps some loadings at 100% and some types of loadings at 200%"
    },
    {
        "questionId": "Q27",
        "question": "The risk of loss of _________ is not covered under the marine insurance.",
        "options": [
            {"id": "A", "text": "Fishing vessel against risk of storm"},
            {"id": "B", "text": "Goods in transit in the Ganga river"},
            {"id": "C", "text": "Motor boat against risk of Fire"},
            {"id": "D", "text": "Ocean going steamer against risk of earthquake"},
            {"id": "E", "text": "Property against risk of delayed delivery."}
        ],
        "correctOption": "E",
        "explanation": "Marine insurance which is the oldest branch of insurance, comprises: Cargo insurance and Hull insurance. Marine Cargo Insurance covers loss or damage to the cargo on the carrying vehicle, vessel, etc. and during incidental storage. This branch deals with insurance of goods in transit by road, rail, sea or air against various risks. Marine Hull Insurance-covers loss or damage to the actual structure of the vessel and its machinery. Hull insurance relates to the insurance of ocean-going steamers, motor launches, fishing vessels, etc., against such risks as fire, collision, storm, stranding, etc. Marine insurance does not cover losses related to delays in delivery"
    },
    {
        "questionId": "Q28",
        "question": "The claim amount gets processed as",
        "options": [
            {"id": "A", "text": "Half of the claim amount"},
            {"id": "B", "text": "Some percentage of sum insured"},
            {"id": "C", "text": "The sum insured only"},
            {"id": "D", "text": "No claim will get passed"},
            {"id": "E", "text": "Total amount of claim"}
        ],
        "correctOption": "B",
        "explanation": "Quantification, Underinsurance (Property Insurance); in case the actual value at risk is greater than the sum insured. Most insurance policies will specify a 'sum insured' or other limit on the value insured under the policy. It is the policyholder's responsibility to determine whether this is adequate for their needs. However, there are times when the actual value at risk is greater than the sum insured. in such cases, the insurer has the right to settle the claim in the same ratio that the sum insured bears to the total value. This is so because the insured has not paid the premium for the full value at risk and so, cannot expect the claim to be settled fully."
    },
    {
        "questionId": "Q29",
        "question": "Paresh is interested in buying the Contractors all risk (C.A.R) insurance policy for their upcoming EPC project. As per the C.A.R insurance policy identify the expense(s) which may be optional as insurable project cost. Material cost Rs.15 crores, labour cost 20% of material cost, lease for equipment Rs.1 crores, freight Rs.0.30 crores, tender deposit (refundable) Rs.0.2 crore, government dues and Taxes Rs.0.6 crores",
        "options": [
            {"id": "A", "text": "Tender deposits (refundable)"},
            {"id": "B", "text": "Material cost"},
            {"id": "C", "text": "Labour cost"},
            {"id": "D", "text": "Government taxes and duties"},
            {"id": "E", "text": "Freight charges"}
        ],
        "correctOption": "A",
        "explanation": "Contractors All Risks (C.A.R.) Policy is designed to protect the interests of contractors and principals in respect of civil engineering projects, like buildings, bridges, tunnels, etc. The policy provides an \"All Risk\" cover. Every risk is covered which is not specifically excluded. This means that almost any sudden and unforeseen loss or damage occurring during the period of insurance to the property insured on the construction site is indemnified. The sum insured under Contractors All Risks (C.A.R.) Policy is the estimated completely erected value of the contract works inclusive of materials, wages, construction costs, freight, customs duties and items supplied by the principal. Hence Tender deposits (refundable) may be optional as insurable project cost under Contractors All Risks (C.A.R.) Policy."
    },
    {
        "questionId": "Q30",
        "question": "Identify what is included in claim modelling?",
        "options": [
            {"id": "A", "text": "Designing a model of how claims can happen and affect the working of any risk"},
            {"id": "B", "text": "Predicting loss by providing for trends, exposure measurement and developing formula"},
            {"id": "C", "text": "Showing how claims impact any risk by using different materials"},
            {"id": "D", "text": "Setting parameters within which claims should be measured"},
            {"id": "E", "text": "Showing how claims can happen in future by using PPT"}
        ],
        "correctOption": "B",
        "explanation": "Claim modelling is a systematic approach used in insurance to estimate future claims based on historical data and various factors. It involves Providing for trends, exposure measurement and developing a formula to predict loss. By combining these elements, claim modelling provides a comprehensive framework for understanding and predicting claims, allowing insurers to manage risk effectively and make informed underwriting decisions."
    },
    {
        "questionId": "Q31",
        "question": "What is an insurer's retention called when he reinsures the surplus to one or more reinsurers?",
        "options": [
            {"id": "A", "text": "One Line"},
            {"id": "B", "text": "Many Line"},
            {"id": "C", "text": "Few Line"},
            {"id": "D", "text": "Two Line"},
            {"id": "E", "text": "Three Line"}
        ],
        "correctOption": "A",
        "explanation": "Sometimes an insurer decides that on any given risk or class of risk, he will retain a certain maximum amount, called retention. In reality, he may actually retain a lesser than the said maximum amount, depending on the risk. He will reinsure the surplus to one or more reinsurers and his retention is called one line."
    },
    {
        "questionId": "Q32",
        "question": "Turnover of a business does not consist of _________ with reference to the loss of profit.",
        "options": [
            {"id": "A", "text": "Variable charges"},
            {"id": "B", "text": "Standing charges"},
            {"id": "C", "text": "Gross profit"},
            {"id": "D", "text": "Net profit"},
            {"id": "E", "text": "Non-operating income"}
        ],
        "correctOption": "E",
        "explanation": "Turnover of a business consists of the following elements: 1. Variable Charges: These are expenses incurred in producing the goods (e.g. purchase of raw materials, wages, etc.) I. Standing Charges: These expenses are fixed in amount irrespective of the volume of the business transacted (e.g. taxes, bank interest, salaries to permanent staff, etc.) III Net Profit: This is turnover minus variable and standing charges. Iv. Gross Profit: Standing charges and net profit together constitute the gross profit of the business. It does not consist of Non-operating income with reference to the loss of profit."
    },
    {
        "questionId": "Q33",
        "question": "In which of the following cases, is the relief payable amount depends on the percentage of disablement certified by an authorized physician i.e, registered medical practitioner, according to the Public liability insurance act of 1991?",
        "options": [
            {"id": "A", "text": "Permanent Partial Disability"},
            {"id": "B", "text": "Actual Medical Expenses"},
            {"id": "C", "text": "Fatal Accident"},
            {"id": "D", "text": "Temporary Partial Disablement"},
            {"id": "E", "text": "Permanent Total Disability"}
        ],
        "correctOption": "A",
        "explanation": "The Public Liability Insurance Act, 1991 prescribes under Section 3 the amount of relief payable is as per the following schedule: Fatal Accident-Rs.25,000/- per person 1. Permanent Total disability Rs.25,000/- per person II. Permanent Partial disability: The amount of relief is based on the percentage of disablement certified by an authorised physician i.e., a registered medical practitioner. iv. Temporary partial disablement which reduces the earning capacity of the victim. Fixed relief not exceeding Rs.1,000/- per month upto a maximum of 3 months (provided the victim has been hospitalised for a period exceeding 3 days and is above 15 years of age). V. Actual Medical Expenses: Upto a maximum of Rs. 12,500 in each case under (i) to (iv) above. vi Actual damage to property upto Rs.6,000/-"
    },
    {
        "questionId": "Q34",
        "question": "A critical illness insurance policy does not cover",
        "options": [
            {"id": "A", "text": "Stroke"},
            {"id": "B", "text": "Cancer"},
            {"id": "C", "text": "Aortic disorders"},
            {"id": "D", "text": "Renal failure"},
            {"id": "E", "text": "Pregnancy"}
        ],
        "correctOption": "E",
        "explanation": "The illness that is typically not covered under a critical illness insurance policy is Pregnancy. Critical illness insurance usually covers severe and life-threatening conditions, while pregnancy-related issues are generally excluded from such policies."
    },
    {
        "questionId": "Q35",
        "question": "Identify the correct statement from the options given below. Exposure is defined as the measurement of how big a risk is",
        "options": [
            {"id": "A", "text": "Exposure is defined as the measurement of how big a risk is"},
            {"id": "B", "text": "Exposure is defined as the measurement of frequency of risk"},
            {"id": "C", "text": "Exposure is defined as the measurement of historical risk"},
            {"id": "D", "text": "Exposure is defined as the measurement of expected premium"},
            {"id": "E", "text": "Exposure is defined as the measurement of expected claim amount"}
        ],
        "correctOption": "A",
        "explanation": "Exposure: in this definition, exposure is the measurement of how big a risk is. For example: Property Insurance: The Sum Insured on the Building or Contents Employer's Liability or Workmen's Compensation: The wage roll on a particular trade classification Products Liability Insurance: Turnover on the relevant product line Note: The exposure and the benefits may not always be the same e.g in Products Liability the turnover may be the best form or exposure measurement but the benefit will be based on the Limit of Liability."
    },
    {
        "questionId": "Q36",
        "question": "Commercial discount is given by Underwriters as",
        "options": [
            {"id": "A", "text": "It is a commercial secret and a highly technical calculation-based discount"},
            {"id": "B", "text": "It is given by way of premium which is borne by the insurer's sister entity"},
            {"id": "C", "text": "It is given if lesser loss than before is being made by the insured in his business"},
            {"id": "D", "text": "It is necessary to retain a business even if there's a loss"},
            {"id": "E", "text": "It is a discount given by way of bonus, as a token of appreciation to a highly profitable business"}
        ],
        "correctOption": "D",
        "explanation": "Underwriters may offer commercial discounts to keep valuable clients or maintain relationships, even if it means accepting a loss on that particular policy."
    },
    {
        "questionId": "Q37",
        "question": "As per Use and File regulations all products should be classified into",
        "options": [
            {"id": "A", "text": "Industrial and non-industrial"},
            {"id": "B", "text": "Safe and hazardous"},
            {"id": "C", "text": "Retail and commercial"},
            {"id": "D", "text": "Profit and not for profit"},
            {"id": "E", "text": "Individual and group"}
        ],
        "correctOption": "C",
        "explanation": "Para 5 of said Guidelines reads as follows. \"For the purpose of these guidelines, the general insurance products shall be classified into two broad classifications, namely Retail products and Commercial products. Both of these classifications are made on the basis of \"who buys the product\" All categories of products called in whatever name, for the purpose of fiting, irrespective of whether falling under \"File and Use' or \"Use and File procedures, shall necessarily be classified under 'Retail or 'Commercial products"
    },
    {
        "questionId": "Q38",
        "question": "DOS policy offers a cover for which of the following?",
        "options": [
            {"id": "A", "text": "To cover stock in cold storage deteriorating as a result of contamination by other goods in cold storage"},
            {"id": "B", "text": "To cover machinery in cold storage against the risk of deterioration due to break down of the refrigeration plant"},
            {"id": "C", "text": "To cover stock in cold storage against the risk of deterioration due to breakdown of refrigeration plant"},
            {"id": "D", "text": "To cover stocks against damage by pests, while in warehouses."},
            {"id": "E", "text": "To cover DOS computer system required to keep the cold storage operational"}
        ],
        "correctOption": "C",
        "explanation": "Deterioration of Stock (DOS) Insurance Policy: The policy known as Deterioration of Stock Insurance or Stock spoilage insurance is a form of consequential loss cover granted in the Engineering Department for stocks contained in large cold stores. The cover is against the risk of deterioration/putrefaction and contamination following breakdown of the refrigeration plant and machinery, a claim for which is admissible in terms of the concurrent Machinery Breakdown Policy."
    },
    {
        "questionId": "Q39",
        "question": "Pratham industries hired a ship on charter from Voyage shipping on dry lease, for transporting coal to various plants in Gujarat. What advice would you give him regarding insurance cover?",
        "options": [
            {"id": "A", "text": "He is not required to take any insurance as he is covered under the policy taken by the vessel owner."},
            {"id": "B", "text": "He should consult a liability insurer to design a suitable cover."},
            {"id": "C", "text": "He should take a Hull Insurance policy during the hire period."},
            {"id": "D", "text": "He should take a Charterers Liabliity Policy"},
            {"id": "E", "text": "Any liability that he may incur on grounds of Charterer's wrong doing can be covered by a liability policy by Voyage Company"}
        ],
        "correctOption": "D",
        "explanation": "Charterera Liability policy covers the damage sustained by the vessel during the period of Charter for which the Charterers are held legally liable. A Charterers liability policy would provide coverage for liabilities that the charterer may incur while using the vessel, including any damages to third parties or cargo while the ship is under their control. This is essential to ensure adequate protection for the charterer's interests"
    },
    {
        "questionId": "Q40",
        "question": "Which of the following statements is correct?",
        "options": [
            {"id": "A", "text": "The principle of 'no fault' means the claimant is required to prove negligence on the part of the motorist. Liability is automatic"},
            {"id": "B", "text": "The principle of 'no fault' means the claimant is not required to prove negligence on the part of the motorist. Liability is automatic"},
            {"id": "C", "text": "The principle of 'no fault' means the claimant is not required to prove compliance as it's a Liability"},
            {"id": "D", "text": "The principle of 'fault' means the motorist is required to prove negligence on the part of the claimant. Liability is not automatic"},
            {"id": "E", "text": "The principle of 'fault' means the motorist is required to prove negligence on the part of the claimant. Liability is not automatic"}
        ],
        "correctOption": "B",
        "explanation": "Section 140 of the Motor Vehicles Act 1988, provides for liability of the owner of the Motor Vehicle to pay compensation in certain cases, on the principle of no fault. The principle of \"no fault\" means the claimant need not prove negligence on the part of the motorist. Liability is automatic."
    },
    {
        "questionId": "Q41",
        "question": "Under Employees State Insurance Act (ESIC) it's the Government's legal responsibility to provide",
        "options": [
            {"id": "A", "text": "Only Sickness Insurance to all its employees"},
            {"id": "B", "text": "Liability Insurance, for all acts done in official capacity, to its employees"},
            {"id": "C", "text": "Sickness and disablement insurance to all its office and clerical employees"},
            {"id": "D", "text": "Sickness and disablement insurance to all its employees"},
            {"id": "E", "text": "Sickness and disablement insurance to employees in the industrial sector"}
        ],
        "correctOption": "E",
        "explanation": "The passing of the Employees State Insurance Act in 1948 Introduced social insurance in India. The objects of the Act are \"to provide certain benefits to employees in cases of sickness, maternity, employment injury and to make provision for certain other matters in relation thereof\". The Act provides for Employees State Insurance Corporation (ESIC), a statutory corporation set up under the provision of the Act. The scheme is applicable to industrial employees as defined in the Act. The Act operates in certain industrial areas as notified by the government from time to time."
    },
    {
        "questionId": "Q42",
        "question": "Choose from the below mentioned options, the board approved Underwriting philosophy.",
        "options": [
            {"id": "A", "text": "It is available to the board members and the chief underwriter but kept top secret"},
            {"id": "B", "text": "It should not be confused with the actual day to day underwriting practice"},
            {"id": "C", "text": "It is available only to the board members and is kept top secret"},
            {"id": "D", "text": "It should be according to the guidelines of the IRDA and must be filed with it"},
            {"id": "E", "text": "It should specifically state where it does and does not agree with IRDA"}
        ],
        "correctOption": "D",
        "explanation": "The board-approved underwriting philosophy should be according to the guidelines of the IRDA and must be filed with it. This ensures that the underwriting philosophy aligns with regulatory standards and is transparent to the relevant authorities."
    },
    {
        "questionId": "Q43",
        "question": "An association of 50 manufacturers of firecrackers located near Sivakasi would like to create a fund of Rs.20 crores as pure premium to protect the members from financial losses due to frequent fire damages. If the average claim size is Rs.4 Lakh, calculate the number of claims on an average per manufacturer.",
        "options": [
            {"id": "A", "text": "5"},
            {"id": "B", "text": "10"},
            {"id": "C", "text": "20"},
            {"id": "D", "text": "25"},
            {"id": "E", "text": "50"}
        ],
        "correctOption": "B",
        "explanation": "To calculate the average number of claims, we can use the below formula: Average Number of Claims = Total Fund/ Average Claim Size = 20,00,00,000/400000 = 500. To calculate the average claims per manufacturer, we would divide Average Number of Claims by total number of manufacturers. Average claims per manufacturer = 500/50=10. Therefore, the number of claims on an average per manufacturer is 10."
    },
    {
        "questionId": "Q44",
        "question": "Calculate the rate on line, given that the limit of liability is Rs.40,000,000 and the total premium is Rs.50.000.",
        "options": [
            {"id": "A", "text": "0.75%"},
            {"id": "B", "text": "2.00%"},
            {"id": "C", "text": "0.125%"},
            {"id": "D", "text": "0.30%"},
            {"id": "E", "text": "0,10%"}
        ],
        "correctOption": "C",
        "explanation": "Rate on Line rating method should be used to reflect the price per million, in local currency unit, applied to the limit of indemnity, or to reflect premium needed for a period of years to cover the cost of the limit(s) provided. Formula to calculate the rate on line: Rate on Line = (Total Premium/Limit of Liability) * 100 Inserting the values in formula we get: Rate on Line = (50,000/40,000,000) * 100=0.125%. So, here the rate of line is 0.125%"
    },
    {
        "questionId": "Q45",
        "question": "To _________ cannot be considered a reason for reinsuring an insurer's risk portfolio.",
        "options": [
            {"id": "A", "text": "Gain access to the reinsurer's (specialist) Intellectual capital."},
            {"id": "B", "text": "Disallow the insurer to access other markets/write more business, than its own capital could."},
            {"id": "C", "text": "Gain access to alternative source of capital"},
            {"id": "D", "text": "Look to obtain an intermational spread of risks."},
            {"id": "E", "text": "Protect the account against large claims."}
        ],
        "correctOption": "B",
        "explanation": "There may be a number of individual reasons to reinsure an amount of the portfolio. These reasons have a potential to damage the insurer's financial stability. An insurer must reinsure its risk portfolio: 1. To protect the account against large claims. 2. To avoid undue fluctuations in underwriting results, ensuring a balanced set of results each year without  peaks and troughs' and comforting the shareholders. iii. To look to obtain an international spread of risks. iv. To gain access to the intellectual capital of the (specialist) reinsurer. V. To gain access to alternative source of capital. VI. To allow the insurer to write more business/access other markets, than its own capital would be able to."
    },
    {
        "questionId": "Q46",
        "question": "What is the maximum claim that a claimant can get in case of the third-party liability insurance, when there are damages by a two-wheeler to third party's property?",
        "options": [
            {"id": "A", "text": "Rs.1 lakh"},
            {"id": "B", "text": "Rs.3 lakhs"},
            {"id": "C", "text": "Rs.7.5 lakhs"},
            {"id": "D", "text": "Rs.2.5 lakhs"},
            {"id": "E", "text": "Rs.5 lakhs"}
        ],
        "correctOption": "C",
        "explanation": "Under Liability insurance, Third Party Liability insurance is covered. There is unlimited coverage to Third parties injury and Third-party property damage is covered up to a sum of Rs 7,50,000,"
    },
    {
        "questionId": "Q47",
        "question": "With reference to a Marine cargo insurance policy, Cost and freight contract involves -",
        "options": [
            {"id": "A", "text": "The responsibility normally attaches once the goods are placed on board. From this point onwards the seller has to take care of the insurance"},
            {"id": "B", "text": "It's the responsibility of the seller to arrange the insurance. Also, he includes the premium charge as part of the cost of goods in the invoice"},
            {"id": "C", "text": "Once the goods are placed on board, the buyer's responsibility normally gets attached along with taking care of the insurance from that point onwards"},
            {"id": "D", "text": "It's the responsibility of the buyer to arrange the insurance Also he includes the premium charge as part of the cost of goods in the invoice"},
            {"id": "E", "text": "The seller is responsible till the goods are placed on board the steamer. From here onwands, the buyer is responsible. All through the transit, insurance is the seller's responsibilty."}
        ],
        "correctOption": "C",
        "explanation": "A contract of sale involves mainly a seller and a buyer, apart from other associated parties like carriers, banks, clearing agents, etc. The question as to who is responsible for effecting insurance on the goods, which are the subject for sale, depends on the terms of the sale contract. In Cost & Freight (C&F), the buyer's responsibility normally (C&F) attaches once the goods are placed on board. He has to take care of the insurance from that point onwards."
    },
    {
        "questionId": "Q48",
        "question": "Identify the correct statement related to Condition of Average.",
        "options": [
            {"id": "A", "text": "15% under insurance is allowed by all engineering policies"},
            {"id": "B", "text": "It is applied to all engineering policies"},
            {"id": "C", "text": "It is not applied to electronic equipment"},
            {"id": "D", "text": "It is calculation of loss arrived at averaging out the total loss amount with the overall claim experience under the policy"},
            {"id": "E", "text": "It is applied only to fire insurance policies"}
        ],
        "correctOption": "D",
        "explanation": "An insured is expected to insure his property for its full value. In the event of claim if it is found that he has not covered the property for its full value, then he has to bear a portion of the claim for his own account. This is the condition of average The condition of average clause in an insurance policy calculates the amount of a claim (loss) based on the ratio of the insured value to the actual value of the property. This clause is used when the policy undervalues the property, also known as underinsurance. The formula for calculating the claim amount under the average clause in an insurance policy is: Claim Amount (Sum Insured/Property's Actual Value) Loss Amount"
    },
    {
        "questionId": "Q49",
        "question": "Towing charges involve",
        "options": [
            {"id": "A", "text": "Cost of insurance"},
            {"id": "B", "text": "Cost of installation"},
            {"id": "C", "text": "Cost of packaging"},
            {"id": "D", "text": "Cost of repair"},
            {"id": "E", "text": "Cost of removal"}
        ],
        "correctOption": "E",
        "explanation": "Towing Charges: If the motor car is disabled as a result of damage covered by the policy, the insurers bear a reasonable cost of protecting the car and removing it to the nearest repairers, as also the reasonable cost of re-delivery to the insured."
    },
    {
        "questionId": "Q50",
        "question": "Which rule states that contractual language is capable of two alternative interpretations where it will be construed in favor of the insured, who accepts the wording and against the insurer who drafted the contract?",
        "options": [
            {"id": "A", "text": "Centra preferenton rule"},
            {"id": "B", "text": "Centre profile rule"},
            {"id": "C", "text": "Contra Profile rule"},
            {"id": "D", "text": "Centra proferentum rule"},
            {"id": "E", "text": "Contra proferentum rule"}
        ],
        "correctOption": "E",
        "explanation": "In case of ambiguity the contra proferentum rule will be applied. Contra proferentum rule (which effectively says against the offering party) states that where contractual language is capable of two alternative interpretations, it will be construed against the insurer who drafted the contract and in favour of the insured, who accepts the wording. This is because the insurer will have chosen the language used and should not be able to benefit from any ambiguity contained within it."
    },
    {
        "questionId": "Q51",
        "question": "As there is no hospital in his town, Ramesh requires medical treatment in another city. _________ is required to cover travel expenses during his hospitalization.",
        "options": [
            {"id": "A", "text": "Hull Insurance"},
            {"id": "B", "text": "Health Insurance"},
            {"id": "C", "text": "Workmen's Compensation Insurance"},
            {"id": "D", "text": "Cargo Insurance"},
            {"id": "E", "text": "Motor Insurance"}
        ],
        "correctOption": "B",
        "explanation": "For Ramesh to cover travel expenses related to medical treatment in another city, he should look for a Health Insurance policy that includes transportation benefits or travel coverage for medical treatment. Some Health Insurance Plans offer coverage for transportation costs if treatment is required far from home."
    },
    {
        "questionId": "Q52",
        "question": "Which of the following statements is correct about a person having Fill certificate from III?",
        "options": [
            {"id": "A", "text": "The person should not utilize it in work which requires high degree of technical knowledge"},
            {"id": "B", "text": "The person should use it for marketing purpose orily"},
            {"id": "C", "text": "The person is acknowledged to be well qualified as a high quality technical resource"},
            {"id": "D", "text": "The person should never use it for marketing purpose"},
            {"id": "E", "text": "The person is not adequately qualified to be a technical resource"}
        ],
        "correctOption": "C",
        "explanation": "In India, the FIII (Fellowship of the Insurance Institute of India) is professional certification offered by the insurance institute of India (III). Fill (Fellowship of the insurance institute of india) is an advanced certification for experienced professionals holding an Alli certification and several years of relevant work experience in the insurance sector. Fill aims to develop a high- level expertise and leadership skills in insurance professionals. Hence, Fill is acknowledged to be well qualified as a high quality technical resource."
    },
    {
        "questionId": "Q53",
        "question": "What is reinsurance of reinsurance also known as?",
        "options": [
            {"id": "A", "text": "Co-insurance"},
            {"id": "B", "text": "Retrocession"},
            {"id": "C", "text": "Retention"},
            {"id": "D", "text": "Cession"},
            {"id": "E", "text": "Line"}
        ],
        "correctOption": "B",
        "explanation": "Reinsurance companies themselves also purchase reinsurance, a practice known as retrocession."
    },
    {
        "questionId": "Q54",
        "question": "Identify the feature that is not valid in Indian general insurance market.",
        "options": [
            {"id": "A", "text": "Retail/ direct broking is permitted"},
            {"id": "B", "text": "IRDAI being the sole authority on each and every aspect of insurance business - both life and nonlife"},
            {"id": "C", "text": "IRDAI to issue license to Surveyors (Loss adjusters) on the basis of professional qualification, training and experience"},
            {"id": "D", "text": "An institute of surveyors has been constituted to regulate the activities of surveyors under the auspices of IRDAI"},
            {"id": "E", "text": "Insurers to appoint agents without following IRDAI regulations"}
        ],
        "correctOption": "E",
        "explanation": "Salient features of Indian general insurance market: 1. IRDA is the sole authority on all aspects of insurance business-both Life & Non-Life. 2. \"Composite\" Insurance Company conducting Life & Non-Life Insurance not allowed. iii. \"Non-Admitted Insurance\" not permitted. i.e. any property situated or to be situated in India has to be necessarily insured with an Indian Insurance Company. Iv. \"Cash and Carry\" market i. e. Cover commences only on Payment of Premium. v. Retail/direct broking is permitted. vi. Brokers to be licensed by IRDA. vii. Agents to be appointed by Insurers in conformity with IRDA regulations. viii. Agents to be trained by IRDA accredited institutes only. ix. Surveyors (Loss Adjusters) to be licensed by IRDA on the basis of professional qualification, training and experience."
    },
    {
        "questionId": "Q55",
        "question": "A ship carrying cargo valued at 90 lac travelling from Mumbai to Dubal has a Cover term ICC (c). A container falls in the sea while unloading at Dubai port. Container head stock is worth 240 lacs. Excess 5% payable amount is",
        "options": [
            {"id": "A", "text": "Rs.35 lacs"},
            {"id": "B", "text": "Rs.25 lacs"},
            {"id": "C", "text": "Rs.90 lacs"},
            {"id": "D", "text": "NIL"},
            {"id": "E", "text": "Rs 110 lacs"}
        ],
        "correctOption": "D",
        "explanation": "Institute Cargo Clauses (C) of Marine Cargo Insurance, covers the following risks/contingencies: 1. fire or explosion Il vessel or craft being stranded, grounded, sunk or capsized , overturning or derailment of land conveyance iv, collision or contact of vessel, craft or conveyance with any external object other than water? discharge of cargo at a port of distress v. general average sacrifice vi jettison institute Institute Cargo Clauses (ICC) are part of marine cargo insurance that protects the cargo in transit. Institute Cargo Clauses-C (ICC-C) mostly includes the perils expected during carriage in the form of accidents. In the given example, the container falls into the sea while unloading af port and not while in transit. Hence, the answer is NIL"
    },
    {
        "questionId": "Q56",
        "question": "Which clause provides that in the event of loss, the amount payable is the cost of reinstating property of the same kind or type, by new property?",
        "options": [
            {"id": "A", "text": "Net realisable value clause"},
            {"id": "B", "text": "Reinstatement value clause"},
            {"id": "C", "text": "Depreciable value clause"},
            {"id": "D", "text": "Intrinsic value clause"},
            {"id": "E", "text": "Fair value clause"}
        ],
        "correctOption": "B",
        "explanation": "Reinstatement Value Policy is the fire policy with the reinstatement value clause attached to it. The clause provides that in the event of loss, the amount payable is the cost of reinstating property of the same kind or type, by new property"
    },
    {
        "questionId": "Q57",
        "question": "As per IRDA, the agency commission rate on Marine Hull insurance is _________%.",
        "options": [
            {"id": "A", "text": "10"},
            {"id": "B", "text": "6.25"},
            {"id": "C", "text": "5"},
            {"id": "D", "text": "12.5"},
            {"id": "E", "text": "15"}
        ],
        "correctOption": "A",
        "explanation": "IRDA decides the Brokerage and Agency Commission structure. Accordingly Marine Hull Insurance agency commission rate is 10%."
    },
    {
        "questionId": "Q58",
        "question": "________ is not a component of a standard general insurance policy.",
        "options": [
            {"id": "A", "text": "Policy schedule"},
            {"id": "B", "text": "Claim documents"},
            {"id": "C", "text": "Conditions"},
            {"id": "D", "text": "Signature"},
            {"id": "E", "text": "Heading"}
        ],
        "correctOption": "B",
        "explanation": "Over the last decade or so, policy wordings have changed significantly in looks particularly in the personal insurances market ie. Motor Insurance, Householders Insurance, etc. where plain English wordings have begun to take precedence. The basic seven components of an insurance policy are: 1. Heading 2. Preamble 3. Signature 4. Operative Clause 5. Exceptions 6. Conditions 7. Policy Schedule"
    },
    {
        "questionId": "Q59",
        "question": "What is the full form of F.O.B?",
        "options": [
            {"id": "A", "text": "Free on Ballast"},
            {"id": "B", "text": "Free on Business"},
            {"id": "C", "text": "Free on Blemishes"},
            {"id": "D", "text": "Free on Ball"},
            {"id": "E", "text": "Free on Board"}
        ],
        "correctOption": "E",
        "explanation": "One of the principal types of sale contracts, in so far as marine insurance is directly concerned is Free on Board (F.O.B). The seller is responsible till the goods are placed (F.O.B.) on board the steamer. The buyer is responsible thereafter. He can get the insurance done wherever he likes."
    },
    {
        "questionId": "Q60",
        "question": "For every claim under terrorism cover for industrial risk there will be a deductible of",
        "options": [
            {"id": "A", "text": "0.5% of Total Sum insured subject to a minimum of Rs.1 lakh"},
            {"id": "B", "text": "5% of Total Sum insured subject to a maximum of Rs.1 lakh"},
            {"id": "C", "text": "10% of Total Sum insured subject to a minimum of Rs.10 lakh"},
            {"id": "D", "text": "0.5% of Total Sum insured subject to a minimum of Rs.5 lakh"},
            {"id": "E", "text": "1% of Total Sum Insured subject to a minimum of Rs. 10 lakh"}
        ],
        "correctOption": "A",
        "explanation": "In Fire Insurance policy, Terrorism damage is excluded in the standard policies. However, it can be covered by payment of extra premium. When the insured opts for Terrorism Damage cover by paying additional premium as provided, cover will be granted by attaching an endorsement. Every claim under terrorism cover will be subject to a deductible as under: Industrial Risks: 0.5% of Total Sum Insured subject to a minimum of Rs.1 lakh. Non-industrial Risks: 0.5% of Total Sum Insured subject to a minimum of Rs. 25,000."
    },
    {
        "questionId": "Q61",
        "question": "Why is Burning cost method not used for all lines of insurance?",
        "options": [
            {"id": "A", "text": "Because It is a scientific method of calculating time to burn a property"},
            {"id": "B", "text": "Because It is a method to calculate the cost of burning the risk"},
            {"id": "C", "text": "Because it refers to the average claim as a result of fire loss"},
            {"id": "D", "text": "Because it is in line with the Law of large numbers"},
            {"id": "E", "text": "Because it is against the Law of large number"}
        ],
        "correctOption": "D",
        "explanation": "Where there have been large fluctuations increases or decreases in wages/turnovers, the burning cost rate may be unreliable and where appropriate, these variations can be smoothed. The method relies on significant historical data and a large number of exposures to provide accurate estimates, which isn't always possible for all insurance lines."
    },
    {
        "questionId": "Q62",
        "question": "________ monitors the Insurance companies.",
        "options": [
            {"id": "A", "text": "The Insurance Act. 1938"},
            {"id": "B", "text": "The Insurance Act. 1939"},
            {"id": "C", "text": "The Insurance Act. 1961"},
            {"id": "D", "text": "The Insurance Act, 1932"},
            {"id": "E", "text": "The Insurance Act. 1940"}
        ],
        "correctOption": "A",
        "explanation": "The Insurance Act, 1938 is a law originally passed in 1938 in British India to regulate the insurance sector. It provides the broad legal framework within which the industry operates."
    },
    {
        "questionId": "Q63",
        "question": "Which money is set aside for eventual claim payment?",
        "options": [
            {"id": "A", "text": "Premium Reserve"},
            {"id": "B", "text": "Claims Reserve"},
            {"id": "C", "text": "Equity Reserve"},
            {"id": "D", "text": "IBNR Reserve"},
            {"id": "E", "text": "Insurance Reserve"}
        ],
        "correctOption": "B",
        "explanation": "Generally, a claims reserve is money that is set aside for the future payment of incurred claims that have not yet been settled. These requirements apply to first-and third-party claims. A claims reserve is earmarked for policyholders who have filed or are expected to file legitimate claims on their policies; this includes third-party claims made against insured that fall within the various policy coverages."
    },
    {
        "questionId": "Q64",
        "question": "Identify the expenses that are NOT reimbursed by the insurers to the insured or his agents to compensate for expenses incurred to minimise the loss or damage payable under the policy.",
        "options": [
            {"id": "A", "text": "Forwarding charges"},
            {"id": "B", "text": "Reconditioning charges"},
            {"id": "C", "text": "Insurance premium"},
            {"id": "D", "text": "Warehousing charges"},
            {"id": "E", "text": "Landing charges"}
        ],
        "correctOption": "C",
        "explanation": "Insurers expect that the insured should at all times act as if he was uninsured and take such steps as a prudent person would normally take. In view of this, if there be any expenses incurred by the insured or his agents to minimise the loss or damage payable under the policy, the same are reimbursed by insurers. Examples of such charges, known as Sue and Labour charges, are landing, warehousing, reconditioning, forwarding and similar charges."
    },
    {
        "questionId": "Q65",
        "question": "Which of the following are 'Assets' according to the language of Economics?",
        "options": [
            {"id": "A", "text": "Non material possessions"},
            {"id": "B", "text": "Home and other material possessions only"},
            {"id": "C", "text": "Family, relatives and close friends:"},
            {"id": "D", "text": "Home, other material possessions and life"},
            {"id": "E", "text": "Only life"}
        ],
        "correctOption": "D",
        "explanation": "We live and express ourselves through our possessions. We also derive material value from our homes and other possessions which fulfil our needs, act as a source of comfort and satisfaction and also enable us to eam money. However, human life has greater value. We treasure them all for what they are and what they can do for us. In the language of economics, we call them assets"
    },
    {
        "questionId": "Q66",
        "question": "The asset liability management method is useful",
        "options": [
            {"id": "A", "text": "In making various risks like liquidity risk, credit risk and interest risk acceptable"},
            {"id": "B", "text": "It is not used much and is still in its infancy stage"},
            {"id": "C", "text": "In making investment decision individually using asset and liability"},
            {"id": "D", "text": "When assets are managed as llabilmes"},
            {"id": "E", "text": "To manage claims in all lines by implementing IRDA guidelines"}
        ],
        "correctOption": "A",
        "explanation": "Asset-liability management basically refers to the process, by which an institution manages its balance sheet, in order to allow for alternative interest rate and liquidity scenarios. Banks and other financial institutions provide services. which expose them to various kinds of risks like credit risk, interest risk, and liquidity risk. Asset liability management is an approach that provides institutions with protection that makes such risks acceptable."
    },
    {
        "questionId": "Q67",
        "question": "Identify the INCORRECT statement with reference to the floater policy..",
        "options": [
            {"id": "A", "text": "Unspecified locations are disallowed"},
            {"id": "B", "text": "The insured is able to declare the total value of goods in all godowns for insurance"},
            {"id": "C", "text": "Unspecified locations are allowed"},
            {"id": "D", "text": "The insured may have stocks in two or more godowns"},
            {"id": "E", "text": "These policies cover stocks under cine sum insured, at various specific locations"}
        ],
        "correctOption": "C",
        "explanation": "Floater Policies cover stocks at various specific locations under one sum insured. The insured may have stocks in two or more godowns. He is able to declare for insurance the total value of goods in all godowns but not separate values for each godown. Unspecified locations are not allowed. Similarly, in a manufacturing risk, the stocks in the process blocks, godowns and/or in the open can be covered under one sum insured."
    },
    {
        "questionId": "Q68",
        "question": "Identify the statement that is true.",
        "options": [
            {"id": "A", "text": "Payment for liability claims are made to third party (TP) claiming damages"},
            {"id": "B", "text": "Payment for fire claims are made to any person nominated by the insured"},
            {"id": "C", "text": "Payment for liability claims are only made to the lawyers over and above the policy excess"},
            {"id": "D", "text": "Payment is not generally made, in GA claims"},
            {"id": "E", "text": "Payment for ilability claims are made to the insured"}
        ],
        "correctOption": "A",
        "explanation": "Liability insurance is an insurance product that provides protection against claims resulting from injuries and damage to other people or property. Liability insurance policies cover any legal costs and payouts an insured party is responsible for if they are found legally llable. Intentional damage and contractual liabilities are generally not covered in liability insurance policies. Unlike other types of insurance, llability insurance policies pay third parties, and not policyholders."
    },
    {
        "questionId": "Q69",
        "question": "Identify the condition when a loss caused by a third party, necessitates the insured to assist the insurers, to help them recover the loss from the third party responsible for the loss.",
        "options": [
            {"id": "A", "text": "Concurrent condition"},
            {"id": "B", "text": "Precedent condition"},
            {"id": "C", "text": "Quasi condition"},
            {"id": "D", "text": "Subrogation condition"},
            {"id": "E", "text": "Implied condition"}
        ],
        "correctOption": "D",
        "explanation": "If the loss is caused by a third party the insured is required to give assistance to the insurers to enable them to recover the loss from the third party responsible for the loss. The insured's rights of recovery against the third party are subrogated to the insurers, and this transfer of rights takes place even before the insurers pay the loss. (This is the subrogation condition)."
    },
    {
        "questionId": "Q70",
        "question": "Which of the following entity takes a carrier's legal liability policy?",
        "options": [
            {"id": "A", "text": "A major oil company"},
            {"id": "B", "text": "Coaching institutes who advise students on their Career plans"},
            {"id": "C", "text": "Transporters to cover for the liability"},
            {"id": "D", "text": "Has to be taken through reinsurers as is unavailable in indian market"},
            {"id": "E", "text": "Companies ordering large scale. Import of any good"}
        ],
        "correctOption": "C",
        "explanation": "Carrier's legal liability insurance protects carriers against llabilities associated with the transport of goods. This insurance is essential for carriers operating in the transportation industry, as it helps mitigate financial risks associated with potential legal liabilities and ensures the smooth flow of goods while safeguarding the interests of carriers and their clients."
    },
    {
        "questionId": "Q71",
        "question": "Calculate amount payable under householder policy, with the help of these details: Section I. SI 4.0 lacs, Section II $sl=4.5$ lacs, loss by fire 1 lacs. Theft of valuable 30 thousand during fire.",
        "options": [
            {"id": "A", "text": "Rs.2.0 lacs"},
            {"id": "B", "text": "Rs.4.5 lacs"},
            {"id": "C", "text": "Rs. 4.0 lacs"},
            {"id": "D", "text": "Rs.1.3 lacs"},
            {"id": "E", "text": "Rs.1.0 lacs"}
        ],
        "correctOption": "D",
        "explanation": "To calculate the amount payable under the Householder Policy, let's summarize the details: Section I (Fire loss): 71.0 lac Section II Sum Insured (51): 74.0 lacs Section II (Theft SI): 24.5 lacs Theft of valuable: 730,000 1. Fire Loss: The loss is 71.0 lac, which is within the Section I sum insured of 24.0 lacs. 2. Theft of Valuable: The theft amount of 730,000 is within the Section II sum insured of ?4.5 lacs. Now, we add the amounts payable: Total payable amount = Fire loss + Theft = 71.0 lac + 230,000 = 71.3 lacs. So, the amount payable under the policy is d. Rs.1.3 lacs."
    },
    {
        "questionId": "Q72",
        "question": "Identify the information generally required to calculate a burning cost.",
        "options": [
            {"id": "A", "text": "Claims experience split between claims outstanding and claims paid"},
            {"id": "B", "text": "Wages or turnover for same period"},
            {"id": "C", "text": "Previous insurer(s) wages for each of the previous 3 years"},
            {"id": "D", "text": "Previous insurer(s) turnover only for each of the previous 5 years"},
            {"id": "E", "text": "Previous insurer(s) turnover only for each of the previous 10 years"}
        ],
        "correctOption": "A",
        "explanation": "The information necessary to complete a burning cost rating calculation is: Claims experience split between claims paid and claims outstanding, Turnover or wages, Previous insurer(s) for each of the past five years."
    },
    {
        "questionId": "Q73",
        "question": "The amount of claim paid is related to which of the following statements?",
        "options": [
            {"id": "A", "text": "It is based on the negotiated settlement as agreed between the claimant and the Surveyor wherein the surveyor tries to reduce the claim as best as possible"},
            {"id": "B", "text": "It is based on damaged parts reinstatement value"},
            {"id": "C", "text": "It is strictly according to the Principle of Indemnity"},
            {"id": "D", "text": "Since insurers add certain amount from their side it's different from what surveyors recommend"},
            {"id": "E", "text": "It is strictly according to surveyors' recommendations"}
        ],
        "correctOption": "C",
        "explanation": "The Principle of Indemnity ensures that the insured is compensated for their loss, but not allowed to profit from an insurance claim. This principle aims to restore the insured to the same financial position they were in before the loss occurred"
    },
    {
        "questionId": "Q74",
        "question": "The _________ calculates IBNR and IBNER.",
        "options": [
            {"id": "A", "text": "Appointed Actuary"},
            {"id": "B", "text": "Reinsurance team of the insurer"},
            {"id": "C", "text": "Operational team of the insurer"},
            {"id": "D", "text": "Claims team of the head office"},
            {"id": "E", "text": "Underwriters of the insurance company"}
        ],
        "correctOption": "A",
        "explanation": "An insurer's Appointed Actuary calculates Incurred but Not Reported (IBNR) and Incurred but Not Enough Reported (IBNER). The actuary is, effectively, a high-level mathematician who: performs actuarial analysis of correlation between the claims and pricing structures at macro level, going down to the micro level of particular trade/risk classifications is experienced in reviewing and analysing insurance operations, claims reserving, underwriting procedures and reinsurance programmes provides technical assistance regarding actuarial matters to policy examiners and other technical staff He or she is involved in the areas of pricing, product design, financial management and corporate planning."
    },
    {
        "questionId": "Q75",
        "question": "Other than the standard proposal form, why do liability insurance proposal forms have an additional specific questionnaire?",
        "options": [
            {"id": "A", "text": "As multiple clauses are attached using the information collected, thereby limiting insurer's liability"},
            {"id": "B", "text": "Since specific and detailed additional Information is required in ilability proposals to suitably customise it"},
            {"id": "C", "text": "As Insurers wish to ask many questions no matter relevant or not"},
            {"id": "D", "text": "To impose additional cost on the insured, addmonal information is sought"},
            {"id": "E", "text": "It helps in raising objections at the time of claims"}
        ],
        "correctOption": "B",
        "explanation": "With a number of covers, there will be a requirement for an additional questionnaire to be completed as the proposal itself will not have the detailed questionnaires (and it is not sensible for the questions to be included on a standard. proposal) Liability insurance often involves unique risks that need to be assessed in detail, and the additional questionnaire helps insurers gather the necessary information to tailor the coverage appropriately."
    },
    {
        "questionId": "Q76",
        "question": "Among other activities, risk assessment involves which of the following tasks?",
        "options": [
            {"id": "A", "text": "Asking an expert to analyze the consultant's work"},
            {"id": "B", "text": "Analysing each risk and deciding appropriate mechanism to tackle it"},
            {"id": "C", "text": "Analysing whether proper method is followed while doing risk identification"},
            {"id": "D", "text": "Auditing the methodology applied for risk identification"},
            {"id": "E", "text": "Asking the consultant to certify that his work is exhaustive and complete and has no lacuna"}
        ],
        "correctOption": "B",
        "explanation": "During the risk assessment process, employers review and evaluate their organizations to: 1. Identify processes and situations that may cause harm, particularly to people (hazard identification). 2. Determine how likely it is that each hazard will occur and how severe the consequences would be (risk analysis and evaluation). 3. Decide what steps the organization can take to stop these hazards from occurring or to control the risk when the hazard can't be eliminated (risk control)."
    },
    {
        "questionId": "Q77",
        "question": "Which of the following statements is incorrect with reference to Commercial insurance products?",
        "options": [
            {"id": "A", "text": "It must look into the issues and guidelines regarding the protection of policy holder's rights"},
            {"id": "B", "text": "The underwriting policy of the Insurer must be strictly followed at all times"},
            {"id": "C", "text": "It should meet the solvency norms and be reasonable regarding appropriateness and affordability of the product"},
            {"id": "D", "text": "A product filed for commercial customers can be sold to individuals"},
            {"id": "E", "text": "The product management committee of the insurer has to design the product"}
        ],
        "correctOption": "D",
        "explanation": "Commercial products are those that are sold to entities other than individuals and will include firms, companies, trusts etc. A product filed for commercial customers shall not be sold to individual customers, Therefore Option (4) is INCORRECT"
    },
    {
        "questionId": "Q78",
        "question": "Which of the following is the best equipped amongst all intermediates?",
        "options": [
            {"id": "A", "text": "Bancassurance"},
            {"id": "B", "text": "Web Aggregators"},
            {"id": "C", "text": "IMF"},
            {"id": "D", "text": "Broker"},
            {"id": "E", "text": "Corporate Agent and Agent"}
        ],
        "correctOption": "D",
        "explanation": "Insurance brokers often represent the policyholder and work independently of insurers in the insurance process. By offering them options about insurers and goods, brokers assist their clients in selecting their insurance plans. Brokers typically engage with numerous firms to place coverage for their clients as \"agents\" for the buyer. Brokers help cilents choose the best insurance among various products by gathering quotations from numerous insurers,"
    },
    {
        "questionId": "Q79",
        "question": "What kind of loan was given as an advance of money on a ship during the period of voyage, which was repayable on arrival of the ship safely at destination, with the agreed rate of interest? (If the ship was lost during the voyage, the obligation to repay the loan was extinguished. The interest payable constituted a sort of Premium for the risk of total loss.)",
        "options": [
            {"id": "A", "text": "A marine loan"},
            {"id": "B", "text": "A Respondentia bond"},
            {"id": "C", "text": "A bottomry bond"},
            {"id": "D", "text": "A cargo loan"},
            {"id": "E", "text": "A bottomry loan"}
        ],
        "correctOption": "E",
        "explanation": "A bottomry loan was an advance of money on a ship during the period of voyage. The loan was repayable with the agreed rate of interest, on arrival of the ship safely at destination; if the ship was lost during the voyage, the obligation to repay the loan was extinguished. The interest payable constituted a sort of premium for the risk of total loss"
    },
    {
        "questionId": "Q80",
        "question": "A Motor package policy covers",
        "options": [
            {"id": "A", "text": "Accidental damage by additional premium according to the scheme of individual insurance"},
            {"id": "B", "text": "Act liability as per the scheme of individual insurance at an additional premium"},
            {"id": "C", "text": "Accidental damage to the vehicle and additional premium according to the the scheme of individual insurance"},
            {"id": "D", "text": "Accidental damage to the vehicle along with the Act Rability and also certain additional benefits at additional premium as per the scheme of individual insurance"},
            {"id": "E", "text": "Accidental damage to the vehicle only"}
        ],
        "correctOption": "D",
        "explanation": "Comprehensive (Package) car insurance policy: In Car Insurance, a comprehensive car insurance policy covers damage to your vehicle caused by certain events. These include (but are not limited to) fire, theft, vandalism and falling objects. This also comes with a deductible you volunteer to pay and which you are obliged to pay before the insurance company pays the remainder It is advisable to buy the Comprehensive insurance policy for your car because it covers the insured, vehicle and third party in a single policy. This type of insurance covers all the risks covered in the Motor Vehicles Act plus Joss or damage caused to the vehicle"
    },
    {
        "questionId": "Q81",
        "question": "The minimum investment required in Central Government Securities is being not less than _________ for insurance premium investments, as per the IRDAI guidelines,",
        "options": [
            {"id": "A", "text": "5%"},
            {"id": "B", "text": "18%"},
            {"id": "C", "text": "20%"},
            {"id": "D", "text": "30%"},
            {"id": "E", "text": "10%"}
        ],
        "correctOption": "C",
        "explanation": "In India, the insurance premium investment structure is laid down very clearly under the insurance Regulatory and Development Authority (Investment) Regulations, 2000. Some of them being: Sr. No. Type of investment Percentage Central Government Securities being not less than- 20% State Government securities and other Guaranteed securities including (1) above being not less than- 30% Housing and Loans to State Government for Housing and Fire Fighting equipment, being not less than- 5%"
    },
    {
        "questionId": "Q82",
        "question": "________ provides the least amount of agency commission amongst all the insurance products.",
        "options": [
            {"id": "A", "text": "Motor Third Party Insurance"},
            {"id": "B", "text": "Marine Cargo Business"},
            {"id": "C", "text": "Marine Hull Insurance"},
            {"id": "D", "text": "Engineering Insurance"},
            {"id": "E", "text": "Fire Insurance"}
        ],
        "correctOption": "A",
        "explanation": "The insurance product that generally provides the least amount of agency commission is Motor Third-Party Insurance. This type of insurance typically offers lower commissions compared to other insurance products like Marine Cargo, Marine Hull, Fire, and Engineering insurance, as it is often mandated by law and has standardized pricing."
    },
    {
        "questionId": "Q83",
        "question": "If value of a property is Rs.6,00,000 and the policy holder has insured the property for 60% of its value, calculate the claim amount payable by the insurer if the policy holder incurred loss of Rs.90.000.",
        "options": [
            {"id": "A", "text": "Rs.30,000"},
            {"id": "B", "text": "Rs.3,60,000"},
            {"id": "C", "text": "Rs.6.00,000"},
            {"id": "D", "text": "Rs.54,000"},
            {"id": "E", "text": "Rs 45.000"}
        ],
        "correctOption": "D",
        "explanation": "An insured is expected to insure his property for its full value. In the event of claim if it is found that he has not covered the property for its full value, then he has to bear a portion of the claim from his own account. In the given example, Sum insured = 6,00,000 * 60% = 3,60,000 Claim amount payable = (Sum Insured/Value of property) * Loss = (3,60,000/6,00,000) * 90,000 = Rs. 54,000"
    },
    {
        "questionId": "Q84",
        "question": "An Indian insurer is obliged to invest _________ into the loans to State Government for housing and firefighting, according to the IRDAI investment guidelines.",
        "options": [
            {"id": "A", "text": "a minimum of 10%"},
            {"id": "B", "text": "a minimum of 25%"},
            {"id": "C", "text": "a minimum of 5%"},
            {"id": "D", "text": "a minimum of 30%"},
            {"id": "E", "text": "a minimum of 50%"}
        ],
        "correctOption": "C",
        "explanation": "Sr. No. Type of Investment Percentage Central Government Securities being not less than- 20% ) State Government securities and other Guaranteed securities including (1) above being not less than- 30% ⅲ) Housing and Loans to State Government for Housing and Fire Fighting equipment, being not less than- 5%"
    },
    {
        "questionId": "Q85",
        "question": "Designated Grievance Redressal Office of ________ handles grievance related to PA policy.",
        "options": [
            {"id": "A", "text": "An Insurance company's clalms department"},
            {"id": "B", "text": "NIA Pune"},
            {"id": "C", "text": "IRDA"},
            {"id": "D", "text": "The Ombudsman Office having jurisdiction in the area"},
            {"id": "E", "text": "The Marketing department of the Underwriting company"}
        ],
        "correctOption": "A",
        "explanation": "Grievances related to a Personal Accident (PA) policy should be referred to the designated Grievance Redressal Office of the insurance company that issued the policy. Most insurance companies have a specific department or team dedicated to handling complaints and grievances. You can typically find their contact information on the insurer's website or in the policy documentation. If the issue is not resolved, you may also escalate it to the Insurance Ombudsman or regulatory authority in your region"
    },
    {
        "questionId": "Q86",
        "question": "In insurance, a payment made with an intention to maintain _________ of the company, is termed as an 'Ex-Gratia'.",
        "options": [
            {"id": "A", "text": "Business"},
            {"id": "B", "text": "Goodwill"},
            {"id": "C", "text": "Profit"},
            {"id": "D", "text": "Settlement dues"},
            {"id": "E", "text": "Claim payment ratio"}
        ],
        "correctOption": "B",
        "explanation": "Ex-gratia Payments: There are times when a claim is not covered but it is felt by senior management that a payment may be made to the insured as a goodwill gesture in insurance this is termed an \"ex-gratia\" payment. Such payments are totally a matter of grace on the part of the insurer, as there is no legal obligation under the contract."
    },
    {
        "questionId": "Q87",
        "question": "By purchasing insurance one can _________ risk.",
        "options": [
            {"id": "A", "text": "Reduce"},
            {"id": "B", "text": "Avoid"},
            {"id": "C", "text": "Ellminate"},
            {"id": "D", "text": "Assume"},
            {"id": "E", "text": "Shin"}
        ],
        "correctOption": "E",
        "explanation": "Purchasing an insurance policy is a common method of transferring risk. When an Individual or entity purchases insurance, it shifts the financial risks of certain identified adverse outcomes occurring within a mutually agreed period to the insurance company. Insurance companies typically charge a fee an insurance premium for accepting such risks."
    },
    {
        "questionId": "Q88",
        "question": "Identify the incorrect statement regarding the clause of Arbitration.",
        "options": [
            {"id": "A", "text": "Arbitration is a cheaper and faster method of resolution of disputes"},
            {"id": "B", "text": "Arbitration will be govemed by the provisions of Arbitration and Conciliation Act 1996"},
            {"id": "C", "text": "Arbitration means a private method of dispute resolution out of Court of law"},
            {"id": "D", "text": "Arbitration will apply for claim disputes rejected by the insurer"},
            {"id": "E", "text": "Arbitration will apply for disputes on the claim amount payable where the liability has been admitted by the insurer"}
        ],
        "correctOption": "D",
        "explanation": "Any dispute regarding the amount of claim payable (liability having been admitted by the insurers) shall be referred to arbitration as per the provisions of the Arbitration and Conciliation Act, 1996. Arbitration is a private method of dispute resolution out of the court of law and is faster and cheaper than the process of litigation."
    },
    {
        "questionId": "Q89",
        "question": "Under which insurance is protection offered to professionals against their legal liability, for payment of damages due to negligence while performing their professional duties?",
        "options": [
            {"id": "A", "text": "Product Liability Insurance"},
            {"id": "B", "text": "Employer's Liability Insurance"},
            {"id": "C", "text": "Professional Indemnities Insurance"},
            {"id": "D", "text": "Third Party Liability Insurance"},
            {"id": "E", "text": "Public Liability Insurance"}
        ],
        "correctOption": "C",
        "explanation": "Professional indemnities are designed to provide insurance protection to professionals such as doctors, solicitors, chartered accountants, architects etc. against their legal liability to pay damages arising out of negligence in performance of their their professional duties."
    },
    {
        "questionId": "Q90",
        "question": "________ is not an exclusion under a Personal accident policy.",
        "options": [
            {"id": "A", "text": "Service in armed forces"},
            {"id": "B", "text": "Suicide"},
            {"id": "C", "text": "Engaging in aviation as a trainee pilot"},
            {"id": "D", "text": "Passenger of a licensed standard type of aircraft"},
            {"id": "E", "text": "Influence of liquor"}
        ],
        "correctOption": "D",
        "explanation": "A personal accident policy can be extended by endorsement, on payment of extra premium to cover medical expenses incurred by the insured in connection with the accidental bodity injury, subject to specified limits. War risk cover can be granted to Indian personnel/ experts working in foreign countries on civilian duties at additional premium. Exclusions (Some examples) are suicide, influence of liquor or drugs, service in armed forces, engaging in aviation except as passenger in licensed standard type of aircraft."
    },
    {
        "questionId": "Q91",
        "question": "As per SFSPP, stocks in process blocks, godowns and/or in open cannot be covered in one Sum Insured except in which case?",
        "options": [
            {"id": "A", "text": "In case of textile factories only"},
            {"id": "B", "text": "If the process block only is affected by loss"},
            {"id": "C", "text": "If the insured is willing to bear additional premium equal to at least twice the regular premium"},
            {"id": "D", "text": "If in case of a loss, insured agrees to bear a higher excess"},
            {"id": "E", "text": "By using a floater policy clause"}
        ],
        "correctOption": "E",
        "explanation": "A standard fire and special perils (SFSPP) policy provides protection against loss due to fire and related perlis. A floater policy covers stocks at various specific locations under one sum insured. The insured may have stocks in two or more godowns. He is able to declare for insurance the total value of goods in all godowns but not separate values for each godown. Unspecified locations are not allowed. Similarly, in a manufacturing risk, the stocka in the process blocks, godowns and/or in the open can be covered under one sum insured."
    },
    {
        "questionId": "Q92",
        "question": "An insured with a TP (third party) Liability Policy reports his customer having lodged a claim for defective product and forwards to the insurer claim notice with product details. The insurer should",
        "options": [
            {"id": "A", "text": "Advise the insured that the claim does not fall under the policy taken"},
            {"id": "B", "text": "Not do anything as this is merely a claim intimation"},
            {"id": "C", "text": "Immediately appoint a CA surveyor"},
            {"id": "D", "text": "Ask for thorough investigation by reporting the matter to the Commerce Ministry"},
            {"id": "E", "text": "Proceed to issue a Product Liability Policy to the client"}
        ],
        "correctOption": "A",
        "explanation": "The employers llability Insurances emphasised the need for third party Claims from third parties against manufacturers for death or bodily injuries due to defective products led to the introduction of products liability insurance. A Third Party (TP) Liability Policy typically covers claims for bodily injury or property damage causad to a third party due to the insured's negligence. However, a claim for a defective product would generally fall under a Product Liability Policy, not a TP Liability Policy."
    },
    {
        "questionId": "Q93",
        "question": "Explain how the Rate on Line method works?",
        "options": [
            {"id": "A", "text": "This method helps to arrive at a rate which needs no further adjustment, on basis of past incurred losses and the expected future exposure"},
            {"id": "B", "text": "This method is based on average past lost experience for the particular risk type over period of around five years."},
            {"id": "C", "text": "This method is based on expected losses and takes into consideration globally industry wise, line wise figures."},
            {"id": "D", "text": "This method involves taking the anticipated loss experience of the particular risk and rating it individually,"},
            {"id": "E", "text": "This method is based on the period during which it expects to recover its cost of limits provided."}
        ],
        "correctOption": "E",
        "explanation": "Rate on Line: This rating method should be used to reflect the price per million, in local currency unit, applied to the limit of indemnity, or to reflect premium needed for a period of years to cover the cost of the limit(s) provided. It is primarily used for accounts, which reveal characteristics of high severity/low frequency potential and risks with high limits of indemnity."
    },
    {
        "questionId": "Q94",
        "question": "Which of the following may result into moral hazard with reference to generic questions of insurance proposal?",
        "options": [
            {"id": "A", "text": "Conviction"},
            {"id": "B", "text": "Declaration"},
            {"id": "C", "text": "Consolidation"},
            {"id": "D", "text": "Exposure"},
            {"id": "E", "text": "Claim experience"}
        ],
        "correctOption": "A",
        "explanation": "Generic questions are common to all insurance proposal forms. One of them is convictions which may give lead into moral hazard."
    },
    {
        "questionId": "Q95",
        "question": "The full form of DOS is",
        "options": [
            {"id": "A", "text": "Department of Science"},
            {"id": "B", "text": "Delay of Start"},
            {"id": "C", "text": "Deterioration of Stock"},
            {"id": "D", "text": "Damage of Stock"},
            {"id": "E", "text": "Diagnosis of Sickness"}
        ],
        "correctOption": "C",
        "explanation": "The policy known as Deterioration of Stock (DOS) Insurance or Stock spoilage insurance is a form of consequential loss cover granted in the Engineering Department for stocks contained in large cold stores. The cover is against the risk of deterioration/putrefaction and contamination following breakdown of the refrigeration plant and machinery, a claim for which is admissible in terms of the concurrent Machinery Breakdown Policy."
    },
{
        "questionId": "Q96",
        "question": "The full form of DOS is",
        "options": [
            {"id": "A", "text": "Department of Science"},
            {"id": "B", "text": "Delay of Start"},
            {"id": "C", "text": "Deterioration of Stock"},
            {"id": "D", "text": "Damage of Stock"},
            {"id": "E", "text": "Diagnosis of Sickness"}
        ],
        "correctOption": "C",
        "explanation": "The policy known as Deterioration of Stock (DOS) Insurance or Stock spoilage insurance is a form of consequential loss cover granted in the Engineering Department for stocks contained in large cold stores. The cover is against the risk of deterioration/putrefaction and contamination following breakdown of the refrigeration plant and machinery, a claim for which is admissible in terms of the concurrent Machinery Breakdown Policy."
    },
    {
        "questionId": "Q97",
        "question": "A power plant takes a Fire policy and a Boiler explosion policy. The boiler plant is ripped open by an explosion. Suggest if the claim is payable and if so under which policy?",
        "options": [
            {"id": "A", "text": "Explosion of boiler plant itself is payable under Fire policy while anly the contents are payable under Boller explosion policy"},
            {"id": "B", "text": "Under the fire policy, explosion of boller plant itself is not payable but It's payable under boiler policy"},
            {"id": "C", "text": "No cover is provided for the damages"},
            {"id": "D", "text": "Under the Boiler explosion policy, explosion of boller plant itself including its contents is payable"},
            {"id": "E", "text": "Boiler explosion policy pays for the MD while Fire policy will pay for any TP liability"}
        ],
        "correctOption": "D",
        "explanation": "Boiler and Pressure Plant Insurance Policy covers boilers and pressure vessels, against: damage, other than by fire, to the boilers and/or other pressure plant and to surrounding property of the insured, as specified in the schedule of the policy, and legal liability of the insured on account of bodily injury, fatal and/or nonfatal, to the person, or damage to the property, of third parties, caused by explosion or collapse of any boiler and/or pressure plant occurring in the course of ordinary working. The sum insured should be the current replacement value."
    },
    {
        "questionId": "Q98",
        "question": "Identify the correct statement from those given below.",
        "options": [
            {"id": "A", "text": "The Policy Documents and Forms are based on the Principles of Insurance Contract and are drafted accordingly to be valid legally and capable of being interpreted"},
            {"id": "B", "text": "The Policy Documents and Forms are worded such, so as to suit the insurer's capabilities and interests"},
            {"id": "C", "text": "The Policy Documents and Forms can be used to lodge a case against the insured by the insurer, in a jurisdiction of their choice"},
            {"id": "D", "text": "The Policy Documents and Forms are never interpreted against the insurer"},
            {"id": "E", "text": "The Policy Documents and Forms do not have to comply with any regulations"}
        ],
        "correctOption": "A",
        "explanation": "The usual rules of contract law govern the contracts of insurance. Specific elements of insurance contract are: Offer and acceptance Consideration Legality (illegal contracts are void) and being capable of performance Agreement (the consent of the parties is necessary for a contract to be enforceable) Contractual capacity (certain persons e.g. minors, cannot be party to a contract) An intention to create a legal relationship No intention to commit fraud The absence of one or more of these will make the contract void, voidable or unenforceable."
    },
    {
        "questionId": "Q99",
        "question": "The amount above the 'per loss' will be recovered from the",
        "options": [
            {"id": "A", "text": "Reinsurer"},
            {"id": "B", "text": "Agent"},
            {"id": "C", "text": "Policy holder"},
            {"id": "D", "text": "Company"},
            {"id": "E", "text": "Insurer"}
        ],
        "correctOption": "A",
        "explanation": "The insurer enters into an agreement with a reinsurer to protect loss as incurred by him. The reinsurer agrees to pay an amount of loss over & above a certain predetermined amount of any loss."
    },
    {
        "questionId": "Q100",
        "question": "What is the maximum amount of sum insured under Janta Personal Accident policy?",
        "options": [
            {"id": "A", "text": "Rs. 25000"},
            {"id": "B", "text": "Rs. 50000"},
            {"id": "C", "text": "Rs. 75000"},
            {"id": "D", "text": "Rs. 100000"},
            {"id": "E", "text": "Rs. 150000"}
        ],
        "correctOption": "D",
        "explanation": "The minimum St under the JPA is Rs 25000 & the maximum SI per person per annum can be Rs 100000 as per the scheme."
    }],
    "ic11Mock5":[
    {
        "questionId": "Q1",
        "question": "Which of the following is not likely to be a rating factor in Fire Insurance ?",
        "options": [
            {"id": "A", "text": "Security of the building"},
            {"id": "B", "text": "Fire Extinguishers"},
            {"id": "C", "text": "Deductible"},
            {"id": "D", "text": "Construction"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "Building security can be considered as a rating factor for burglary insurance but not fire insurance."
    },
    {
        "questionId": "Q2",
        "question": "Which of the following is a TRUE statement? Fraud is a",
        "options": [
            {"id": "A", "text": "Condition Precedent"},
            {"id": "B", "text": "Condition Subsequent"},
            {"id": "C", "text": "Implied Condition"},
            {"id": "D", "text": "Assumed Condition"},
            {"id": "E", "text": "Legal Condition"}
        ],
        "correctOption": "B",
        "explanation": "Fraud is a condition subsequent. Condition subsequent to the contract refers to an act or event that cancels a contractual right eg, any act of fraud within the claim process on the part of the insured would immediately cancel the insurer's obligation to continue with the claim."
    },
    {
        "questionId": "Q3",
        "question": "tends to be a package of covers picking up more traditional covers of Employee thefts, Premises coverage, Depositors forgery, Computer fraud etc.",
        "options": [
            {"id": "A", "text": "Bankers blanket insurance"},
            {"id": "B", "text": "Crime Insurance"},
            {"id": "C", "text": "Cyber insurance"},
            {"id": "D", "text": "Office package insurance"},
            {"id": "E", "text": "SME package insurance"}
        ],
        "correctOption": "B",
        "explanation": "The Crime insurance which is prevalent in the western countries is a new concept in the indian market. It's a package policy consisting of 5 perils bundled into one policy covering the employee theft, premises coverage, transit, computer fraud & depositor's forgery."
    },
    {
        "questionId": "Q4",
        "question": "What does the insurer incorporates in order to reduce physical hazard?",
        "options": [
            {"id": "A", "text": "Appropriate rules"},
            {"id": "B", "text": "Appropriate agreements"},
            {"id": "C", "text": "Appropriate contracts"},
            {"id": "D", "text": "Appropriate clauses"},
            {"id": "E", "text": "Appropriate certificate"}
        ],
        "correctOption": "D",
        "explanation": "Appropriate clauses serve the purpose of risk management thereby reducing the loss potential of any given risk. The clauses restrict the coverage/ payment of any loss."
    },
    {
        "questionId": "Q5",
        "question": "The Janta Personal Accident (JPA) policy is specifically designed for",
        "options": [
            {"id": "A", "text": "Higher sections of the society"},
            {"id": "B", "text": "Weaker sections of the soolety"},
            {"id": "C", "text": "All sections of the society"},
            {"id": "D", "text": "Common sections of the society"},
            {"id": "E", "text": "Public sections of the society"}
        ],
        "correctOption": "B",
        "explanation": "The policy is primarily designed for weaker section of the society. Any person irrespective of sex, occupation and profession in the age group of 10 to 70 years may be covered under Janata Personal Accident Policy. The premium is only Rs 15 for a Si of Rs. 26000."
    },
    {
        "questionId": "Q6",
        "question": "Which two records are maintained for claims?",
        "options": [
            {"id": "A", "text": "Claims paid and claims intimated"},
            {"id": "B", "text": "Policy assured and policy document"},
            {"id": "C", "text": "Client details and policy document"},
            {"id": "D", "text": "Basic details and policy documents"},
            {"id": "E", "text": "Accounts info and premium statements"}
        ],
        "correctOption": "A",
        "explanation": "Claims paid and claims intimated give fairly accurate picture of financial position of the insurers. It guides the insurers for the future strategy towards the product pricing & arranging the reinsurance.."
    },
    {
        "questionId": "Q7",
        "question": "Fire insurance for residential properties is classified as",
        "options": [
            {"id": "A", "text": "Storage risk"},
            {"id": "B", "text": "Manufacturing risk"},
            {"id": "C", "text": "Simple risk"},
            {"id": "D", "text": "Hazardous tisk"},
            {"id": "E", "text": "Institution risk"}
        ],
        "correctOption": "C",
        "explanation": "Residential properties fall under the categories of dwellings. Dwellings are considered to be simple risk as compared to other complex risks such as industrial All Risk or FLOP (Fire Loss Of Profit insurance),"
    },
    {
        "questionId": "Q8",
        "question": "When the Money transit insurance is renewed, the premium is calculated on the basis of",
        "options": [
            {"id": "A", "text": "Only money"},
            {"id": "B", "text": "Money in transit"},
            {"id": "C", "text": "Actual money in transit"},
            {"id": "D", "text": "Insurance policy"},
            {"id": "E", "text": "Contract basis"}
        ],
        "correctOption": "B",
        "explanation": "This cover is also known as Money Insurance which actually refers to money in transit & money in the premises. Since the actual value of money in transit for the policy period cannot be ascertained in advance, estimated money in transit is kept as a S1 & the premium adjustment is done at the end."
    },
    {
        "questionId": "Q9",
        "question": "The major life insurers in the world are located in which continent?",
        "options": [
            {"id": "A", "text": "Asia"},
            {"id": "B", "text": "Europe"},
            {"id": "C", "text": "North America"},
            {"id": "D", "text": "South America"},
            {"id": "E", "text": "Africa"}
        ],
        "correctOption": "B",
        "explanation": "In the global insurance market, UK is the largest market for insurance. The market share of insurance business is to the extent of \$1, 753 Billion against the North America whose business is \$1, 346 Billion."
    },
    {
        "questionId": "Q10",
        "question": "The first phase of customer service comprise of",
        "options": [
            {"id": "A", "text": "Dealing with customers demand"},
            {"id": "B", "text": "Dealing with the problems of customers"},
            {"id": "C", "text": "Pre sales service"},
            {"id": "D", "text": "Identification of customers need"},
            {"id": "E", "text": "Identification of customers"}
        ],
        "correctOption": "D",
        "explanation": "The insurance protection can only be granted to an insured based upon his risk exposure. The insurer has to identify the customer's exact need for insurance before a solution can be offered."
    },
    {
        "questionId": "Q11",
        "question": "Under which clause is the cover for costs related to i) Cost of controlling the blow out il) Cost of Cleaning Up ill) Pollution Liability etc. provided?",
        "options": [
            {"id": "A", "text": "Blow out clause"},
            {"id": "B", "text": "All risk clause"},
            {"id": "C", "text": "Energy explosion and development clause"},
            {"id": "D", "text": "Launch clause"},
            {"id": "E", "text": "Pre-operation clause"}
        ],
        "correctOption": "C",
        "explanation": "This is also known as EED (Energy explosion and development) clause. The perils stated above forms the part of Oil and Energy Risk insurance. Under the policy, apart from physical damage to the assete, if an oil well goes out of control, all of the above expenses would have to be incurred. The EED clause covers these expenses."
    },
    {
        "questionId": "Q12",
        "question": "In which insurance are the rights of subrogation commonly enforced?",
        "options": [
            {"id": "A", "text": "Erection all risk insurance"},
            {"id": "B", "text": "Burglary insurance"},
            {"id": "C", "text": "Marine cargo insurance"},
            {"id": "D", "text": "Motor TP insurance"},
            {"id": "E", "text": "Fire insurance"}
        ],
        "correctOption": "D",
        "explanation": "Subrogation is the right for an insurer to legally pursue a third party that caused an insurance loss to the insured. Third party causing accident to insured of an insurer, is generally seen in motor third party insurance."
    },
    {
        "questionId": "Q13",
        "question": "To what extent are the reimbursement expense for a damaged private car's protection is limited to ?",
        "options": [
            {"id": "A", "text": "Rs 1000"},
            {"id": "B", "text": "Rs 1500"},
            {"id": "C", "text": "Rs 2000"},
            {"id": "D", "text": "Rs 2200"},
            {"id": "E", "text": "Rs 2500"}
        ],
        "correctOption": "E",
        "explanation": null
    },
    {
        "questionId": "Q14",
        "question": "On which basis are the reinsurance arrangements of the insurance companies decided upon ?",
        "options": [
            {"id": "A", "text": "Weekly basis"},
            {"id": "B", "text": "Quarterly basis"},
            {"id": "C", "text": "Half yearly basis"},
            {"id": "D", "text": "Annual basis"},
            {"id": "E", "text": "Monthly basis"}
        ],
        "correctOption": "D",
        "explanation": "The insurers have to plan their strategy in advance on yearly basis to arrange for reinsurance arrangement. It has to obtain prior approval for such arrangement from the authority i.e. from IRDA"
    },
    {
        "questionId": "Q15",
        "question": "Premium is the consideration paid by the insured under",
        "options": [
            {"id": "A", "text": "Body"},
            {"id": "B", "text": "Terms"},
            {"id": "C", "text": "Agreement"},
            {"id": "D", "text": "Contract"},
            {"id": "E", "text": "Framework"}
        ],
        "correctOption": "D",
        "explanation": "The payment of premium (consideration) & subsequent issuing the insurance policy concludes the contract of insurance. This may be known as offer & acceptance under the Contract Act, 1872."
    },
    {
        "questionId": "Q16",
        "question": "What is issued by the insurers a month in advance before the date of expiry?",
        "options": [
            {"id": "A", "text": "Warning"},
            {"id": "B", "text": "Declaration"},
            {"id": "C", "text": "Renewal notice"},
            {"id": "D", "text": "Notice"},
            {"id": "E", "text": "Order"}
        ],
        "correctOption": "C",
        "explanation": "Renewal notice solicits the payment of premium for renewal of the expiring policy. It's done in advance enabling insured to arrange for the payment. It is although not obligatory, but it is considered to be a healthy business practice to remind about the expiring policy as a matter of courtesy."
    },
    {
        "questionId": "Q17",
        "question": "Which policy gives indemnity to the insured in respect of his/her legal liability to pay compensation to his/her employees who sustain personal injury by accident?",
        "options": [
            {"id": "A", "text": "Compulsory public liability policy"},
            {"id": "B", "text": "Legal liability policy"},
            {"id": "C", "text": "Workmen's compensation policy"},
            {"id": "D", "text": "Professional indemnities policy"},
            {"id": "E", "text": "Public liability policy"}
        ],
        "correctOption": "C",
        "explanation": "The legal liabilities of an insured towards his workers are covered under The Workmen's Compensation Policy. All other policies referred above covers the legal liabilities of third parties other than workers."
    },
    {
        "questionId": "Q18",
        "question": "When does an insurance policy become legally enforceable?",
        "options": [
            {"id": "A", "text": "When it is accepted by policy holder"},
            {"id": "B", "text": "When it is delivered to policy holder"},
            {"id": "C", "text": "When it is recorded in policy register"},
            {"id": "D", "text": "When it is Stamped"},
            {"id": "E", "text": "When it is Signed"}
        ],
        "correctOption": "D",
        "explanation": "A policy is a stamped document and is therefore legally enforceable in itself. An open cover is unatamped and hence has no legal validity. So stamping of the policy is essential for legal standing."
    },
    {
        "questionId": "Q19",
        "question": "The premium payable for Public Liability Act policy is",
        "options": [
            {"id": "A", "text": "1.5 times"},
            {"id": "B", "text": "2 times"},
            {"id": "C", "text": "2.5 times"},
            {"id": "D", "text": "3 times"},
            {"id": "E", "text": "4 times"}
        ],
        "correctOption": "B",
        "explanation": "up by the Govt to be utilized under certain circumstances. Under Public Liability policy drafted as per The Public Liability Insurance Act, 1991, an amount equal to the premium is to be paid to the insurer to by the insured. This amount is insured's contribution to the Environment Relief Fund set"
    },
    {
        "questionId": "Q20",
        "question": "Motor vehicles classified in to",
        "options": [
            {"id": "A", "text": "1"},
            {"id": "B", "text": "2"},
            {"id": "C", "text": "3"},
            {"id": "D", "text": "4"},
            {"id": "E", "text": "5"}
        ],
        "correctOption": "C",
        "explanation": "Motor vehicles are categorized under 3 categories as per the Motor Vehicles Act, 1988. However under commercial vehicles, there is further classification in respect to Goods carrying vehicles, Passenger carrying vehicles & Miscellaneous vehicles"
    },
    {
        "questionId": "Q21",
        "question": "Which of the following cannot be insured under Cyber Liabilities?",
        "options": [
            {"id": "A", "text": "Losses because Third Parties could not access the system"},
            {"id": "B", "text": "Losses arising from hacking into insured's server"},
            {"id": "C", "text": "Liability for the insured spreading virus to the third party"},
            {"id": "D", "text": "Deliberate malicious lies from the insured to Third Parties"},
            {"id": "E", "text": "All of the above"}
        ],
        "correctOption": "D",
        "explanation": "Deliberate malicious lies from the insured to Third Parties would not be covered."
    },
    {
        "questionId": "Q22",
        "question": "Risk premium is calculated on the basis of",
        "options": [
            {"id": "A", "text": "Number of people insured"},
            {"id": "B", "text": "Average loss ratio"},
            {"id": "C", "text": "Profit ratios"},
            {"id": "D", "text": "Number of vehicles insured"},
            {"id": "E", "text": "Average life of property"}
        ],
        "correctOption": "B",
        "explanation": "The loss ratio is the difference between the ratios of premiums paid to an insurance company and the claims settled by the company. The loss ratio is the total losses paid by an insurance company in the form of claims. The premium calculation principle is one of the main objectives of study for actuaries. There seems to be full agreement among the leading theoreticians in the field that the insurance premium should reflect both the expected claims and certain loadings."
    },
    {
        "questionId": "Q23",
        "question": "To whom will all the insurers in India inform while devising their re-insurance programme every year?",
        "options": [
            {"id": "A", "text": "RBI"},
            {"id": "B", "text": "GIC"},
            {"id": "C", "text": "LIC"},
            {"id": "D", "text": "IRDAI"},
            {"id": "E", "text": "SEBI"}
        ],
        "correctOption": "D",
        "explanation": "Reinsurance is basically a mechanism enabling retaining & developing insurance capacity in India. Each insurer has to inform & take prior approval about their reinsurance programme every year."
    },
    {
        "questionId": "Q24",
        "question": "Self ignition damage is covered under which standard policy?",
        "options": [
            {"id": "A", "text": "Personal accident"},
            {"id": "B", "text": "Motor package"},
            {"id": "C", "text": "Fire"},
            {"id": "D", "text": "Marine hull"},
            {"id": "E", "text": "Machinery loss of profit"}
        ],
        "correctOption": "B",
        "explanation": "Self-ignition is an original cover under the motor policy. This peril covers loss or damage to the vehicle by fire, explosion, self-ignition or lightening."
    },
    {
        "questionId": "Q25",
        "question": "The Janta Personal Accident (JPA) policy contracts are for",
        "options": [
            {"id": "A", "text": "Annual basis"},
            {"id": "B", "text": "Long term basis"},
            {"id": "C", "text": "Annual or long term basis"},
            {"id": "D", "text": "Agreement basis"},
            {"id": "E", "text": "Schedule basis"}
        ],
        "correctOption": "C",
        "explanation": "JPA is issued to any person irrespective of sex & occupation. The policy can be issued on annual or long term (2 to 5 yrs. with discount in premium) basis."
    },
    {
        "questionId": "Q26",
        "question": "The Balance Sheet of companies represent",
        "options": [
            {"id": "A", "text": "Company position"},
            {"id": "B", "text": "Legal status of the company"},
            {"id": "C", "text": "Company status"},
            {"id": "D", "text": "Detit position of the company"},
            {"id": "E", "text": "Financial position of the company"}
        ],
        "correctOption": "E",
        "explanation": "The purpose of the balance sheet is to provide an idea of a company's financial position. It does so by outlining the total assets that a company owns and any amounts that it owes to lenders or banks, for example, as well as the amount of equity."
    },
    {
        "questionId": "Q27",
        "question": "Speculative risk is also known as",
        "options": [
            {"id": "A", "text": "Company risk"},
            {"id": "B", "text": "Trade risk"},
            {"id": "C", "text": "Insured risk"},
            {"id": "D", "text": "Declined risk"},
            {"id": "E", "text": "Business risk"}
        ],
        "correctOption": "B",
        "explanation": "Although Business also faces uncertainty, Trading is more likely related to speculation. Therefore, Speculative risk is also known as Trade Risk."
    },
    {
        "questionId": "Q28",
        "question": "The special declaration deposit premium of 100% of the premium on the sum insured based on the",
        "options": [
            {"id": "A", "text": "Current year's turnover"},
            {"id": "B", "text": "First year's turnover"},
            {"id": "C", "text": "Next year's turnover"},
            {"id": "D", "text": "Last year's turnover"},
            {"id": "E", "text": "Previous year's turnover"}
        ],
        "correctOption": "E",
        "explanation": "This policy is issued to client's whose estimated annual turnover exceeds 2 crores. The Sl is based on previous year turnover for existing clients & estimated turnover for a new client."
    },
    {
        "questionId": "Q29",
        "question": "Services of",
        "options": [
            {"id": "A", "text": "Investigator"},
            {"id": "B", "text": "Underwriter"},
            {"id": "C", "text": "ΤΡΑ"},
            {"id": "D", "text": "Claim technician"},
            {"id": "E", "text": "Surveyor and loss assessor"}
        ],
        "correctOption": "E",
        "explanation": "Under Section 64UM of the Insurance Act, 1938, for property losses of Rs. 20,000 & above, it is mandatory to appoint an independent loss assessor for assessment of loss. These assessors are licensed by IRDA."
    },
    {
        "questionId": "Q30",
        "question": "Business risk is an",
        "options": [
            {"id": "A", "text": "Insurable"},
            {"id": "B", "text": "Non Insurable"},
            {"id": "C", "text": "Hazardous"},
            {"id": "D", "text": "Uncontrollable"},
            {"id": "E", "text": "Controllable"}
        ],
        "correctOption": "B",
        "explanation": "Insurance is relevant only when there is uncertainty about the risk. A business on the other hand inherently would result either into loss or profit. Hence the business risk is non-insurable. Insurers can insure the external risks/ perils not the inherent risks/ perils."
    },
    {
        "questionId": "Q31",
        "question": "Incurred claims are the value of paid and outstanding claims for the year after deduction of",
        "options": [
            {"id": "A", "text": "Brought over balances"},
            {"id": "B", "text": "Surplus balances"},
            {"id": "C", "text": "Fiscal deficit"},
            {"id": "D", "text": "Claims outstanding"},
            {"id": "E", "text": "Prepaid claims"}
        ],
        "correctOption": "D",
        "explanation": "Incurred claim includes all paid claims during the period plus a reasonable estimate of unpaid liabilities. It is calculated by adding paid claims and unpaid claims minus the estimate of unpaid claims (Claims outstanding) at the end of the prior valuation period."
    },
    {
        "questionId": "Q32",
        "question": "Whose functions are identification and acceptance of risk based on factual information, evaluation and acceptance?",
        "options": [
            {"id": "A", "text": "Underwriters"},
            {"id": "B", "text": "Agents"},
            {"id": "C", "text": "Surveyors"},
            {"id": "D", "text": "Brokers"},
            {"id": "E", "text": "Claim technicians"}
        ],
        "correctOption": "A",
        "explanation": "An insurance underwriter decides if applications for insurance cover (risks) should be accepted and, if so, what the terms and conditions of that acceptance are. He will assess the risk of insuring a person or company according to the likelihood of a claim being made"
    },
    {
        "questionId": "Q33",
        "question": "What is the process called wherein the risk of damage by flooding is avoided by moving the factory to another safer site?",
        "options": [
            {"id": "A", "text": "Risk evaluation"},
            {"id": "B", "text": "Risk avoidance"},
            {"id": "C", "text": "Risk detection"},
            {"id": "D", "text": "Risk control"},
            {"id": "E", "text": "Risk identification"}
        ],
        "correctOption": "B",
        "explanation": "It's a risk management technique where in the losses of high severity & high frequency are best dealt in a manner of just avoiding it. No insurer would insure such risk/ losses & none could manage it of its own."
    },
    {
        "questionId": "Q34",
        "question": "If the insurer is not interested in the renewal of policy, it has to give",
        "options": [
            {"id": "A", "text": "Actual notice"},
            {"id": "B", "text": "Meeting notice"},
            {"id": "C", "text": "Prior notice"},
            {"id": "D", "text": "Public notice"},
            {"id": "E", "text": "Expired notice"}
        ],
        "correctOption": "C",
        "explanation": "The prior notice is usually given by an insurer to an insured if they are not interested in renewal of the policy. It is given in advance enabling the insured to arrange the insurance elsewhere before the expiry of the current policy"
    },
    {
        "questionId": "Q35",
        "question": "What do 'Reserves' refer to in insurance accounting?",
        "options": [
            {"id": "A", "text": "Estimate for future liabilities"},
            {"id": "B", "text": "Funds for future expansions"},
            {"id": "C", "text": "Funds available for investments"},
            {"id": "D", "text": "Invested funds"},
            {"id": "E", "text": "Funds for future dividends"}
        ],
        "correctOption": "A",
        "explanation": "Insurance industry operations involve the costs which are uncertain and delayed. Such costs can only be estimated & reserve has to be kept for such future liabilities."
    },
    {
        "questionId": "Q36",
        "question": "Who issues the Bill of Lading?",
        "options": [
            {"id": "A", "text": "Road transporters"},
            {"id": "B", "text": "Shipping companies"},
            {"id": "C", "text": "Couriers"},
            {"id": "D", "text": "Railways"},
            {"id": "E", "text": "Airlines"}
        ],
        "correctOption": "B",
        "explanation": "The consignment note issued by the shipping companies is known as Bill of Lading. All others have their respective name i.e. goods receipt for road transport, airway bill for airlines etc."
    },
    {
        "questionId": "Q37",
        "question": "A Certificate of Insurance is issued in addition to the policy in motor insurance. This is required by",
        "options": [
            {"id": "A", "text": "General Insurance act"},
            {"id": "B", "text": "Consumer act"},
            {"id": "C", "text": "Property Insurance act"},
            {"id": "D", "text": "LIC act"},
            {"id": "E", "text": "Motor Vehicles act"}
        ],
        "correctOption": "E",
        "explanation": "The motor insurance being a compulsory insurance requires a certificate of insurance which provides that the policy is being issued as per the provisions of the MV Act. The concerned authorities therefore rely upon the certificate of insurance."
    },
    {
        "questionId": "Q38",
        "question": "Claims under Industrial All Risk insurance are computed on the basis of",
        "options": [
            {"id": "A", "text": "premium"},
            {"id": "B", "text": "disability"},
            {"id": "C", "text": "contract"},
            {"id": "D", "text": "material damage"},
            {"id": "E", "text": "risks"}
        ],
        "correctOption": "D",
        "explanation": "The subject matter of Industrial All Risk insurance is material damage. Therefore the claim computation would be based upon the material damage only."
    },
    {
        "questionId": "Q39",
        "question": "The fourth phase of customer service comprise of",
        "options": [
            {"id": "A", "text": "Actual preparation of the policy and other documents"},
            {"id": "B", "text": "Customer satisfaction"},
            {"id": "C", "text": "Dealing with customers demand"},
            {"id": "D", "text": "Dealing with problems of customers"},
            {"id": "E", "text": "Pre sales service"}
        ],
        "correctOption": "D",
        "explanation": "Having served the customer by accepting the risk, issuing the policy documents, dealing with the customers demand, it is now the time to sort out the problems that are being faced by the customers."
    },
    {
        "questionId": "Q40",
        "question": "How is the premium to be paid calculated under Declaration policy ?",
        "options": [
            {"id": "A", "text": "On the basis of sum insured"},
            {"id": "B", "text": "On the basis of damage caused"},
            {"id": "C", "text": "On the basis of risk involved"},
            {"id": "D", "text": "On the basis of property"},
            {"id": "E", "text": "On the basis of cost of replacement"}
        ],
        "correctOption": "A",
        "explanation": "The policy is issued for certain minimum 51 & the insured has to declare the monthly St of the stocks which are seasonal in nature. At the end of the policy period, refund of premium is granted subject to minimum 50% retention of premium"
    },
    {
        "questionId": "Q41",
        "question": "What will be an appropriate sum insured for death cover under PA policy?",
        "options": [
            {"id": "A", "text": "3 years income"},
            {"id": "B", "text": "5 year income"},
            {"id": "C", "text": "7.5 years income"},
            {"id": "D", "text": "Annual income"},
            {"id": "E", "text": "No limit"}
        ],
        "correctOption": "B",
        "explanation": "The PA policy fixes the Si compared with the monthly income of the insured. As a thumb rule, it is generally granted for an amount equivalent to 5 to 6 yrs. of yearly income. However the practice of fixing Si differs between insurers."
    },
    {
        "questionId": "Q42",
        "question": "Some risks are considered as extra hazardous and are therefore declined. These are called",
        "options": [
            {"id": "A", "text": "Speculative Risk"},
            {"id": "B", "text": "Damage risk"},
            {"id": "C", "text": "Declined risk"},
            {"id": "D", "text": "Hazardous risk"},
            {"id": "E", "text": "Destruction risk"}
        ],
        "correctOption": "C",
        "explanation": "Extra hazardous risks which cannot be insured in spite of loading the premium or by any appropriate clause are called declined risk."
    },
    {
        "questionId": "Q43",
        "question": "In case of fire and marine cargo insurance, the percentage of premium that the insurer is required to provide for as reserves is",
        "options": [
            {"id": "A", "text": "25%"},
            {"id": "B", "text": "30%"},
            {"id": "C", "text": "50%"},
            {"id": "D", "text": "75%"},
            {"id": "E", "text": "100%"}
        ],
        "correctOption": "C",
        "explanation": "As per Section 64V (1) of the Insurance Act, 1938, for fire & marine cargo the reserve to be kept is 50%."
    },
    {
        "questionId": "Q44",
        "question": "What is the primary source of income for an insurer?",
        "options": [
            {"id": "A", "text": "Bonus"},
            {"id": "B", "text": "Remuneration"},
            {"id": "C", "text": "Commission"},
            {"id": "D", "text": "Premium"},
            {"id": "E", "text": "Discount in premium"}
        ],
        "correctOption": "D",
        "explanation": "Income & expenditure are two sides of any business. Insurance business is no exception. Income of an insurance company is derived from the premium collected from the proposers who becomes insured after the issue of the insurance policy."
    },
    {
        "questionId": "Q45",
        "question": "Refrigeration plant insurance covers indemnity of",
        "options": [
            {"id": "A", "text": "Factories"},
            {"id": "B", "text": "Shops"},
            {"id": "C", "text": "Cold storage"},
            {"id": "D", "text": "Warehouses"},
            {"id": "E", "text": "Godown"}
        ],
        "correctOption": "C",
        "explanation": "This policy is issued under engineering insurance for covering the losses form the stocks stored in the cold storage. This policy is popularly known as Deterioration of Stock policy."
    },
    {
        "questionId": "Q46",
        "question": "From the time the machinery leaves the",
        "options": [
            {"id": "A", "text": "Forehead"},
            {"id": "B", "text": "Supervisors"},
            {"id": "C", "text": "Factory inspectors"},
            {"id": "D", "text": "Production head"},
            {"id": "E", "text": "Manufacturer"}
        ],
        "correctOption": "E",
        "explanation": "This is an Erection All Risk (EAR) policy with the transportation risk is also granted. It is therefore called Marine-Cum-Erection (MEC) policy The cover is granted of erection of machinery & starts right from the time the machinery leaves the manufacturer's warehouse & continues until the project is over."
    },
    {
        "questionId": "Q47",
        "question": "Damage to machinery or machine breakdown may result in business interruption and is termed as",
        "options": [
            {"id": "A", "text": "Loss of finance"},
            {"id": "B", "text": "Loss of profil"},
            {"id": "C", "text": "Loss of personnel"},
            {"id": "D", "text": "Loss of legal liability"},
            {"id": "E", "text": "Losses of assets"}
        ],
        "correctOption": "B",
        "explanation": "Under engineering insurance Machinery Breakdown (MBD) covers material damage losses. The damage to machinery may result into business interruption causing loss of profit. This can be covered under MLOP (Machinery Loss of Profit policy"
    },
    {
        "questionId": "Q48",
        "question": "is not considered as a Consignment Note ?",
        "options": [
            {"id": "A", "text": "Airway bill"},
            {"id": "B", "text": "Goods receipt"},
            {"id": "C", "text": "Bill of exchange"},
            {"id": "D", "text": "Bill of lading"},
            {"id": "E", "text": "Railway receipt"}
        ],
        "correctOption": "C",
        "explanation": "Bill of exchange is a document guaranteeing the payment of a specific amount of money. All other documents are related to good receipt issued by respective carries of the goods"
    },
    {
        "questionId": "Q49",
        "question": "is an example of packaged products.",
        "options": [
            {"id": "A", "text": "Bankers blanket insurance"},
            {"id": "B", "text": "Horse insurance"},
            {"id": "C", "text": "Marine Insurance"},
            {"id": "D", "text": "Micro insurance"},
            {"id": "E", "text": "Burglary insurance"}
        ],
        "correctOption": "A",
        "explanation": "The rest of the options are individual cover designed to protect the specific risk. Under Bankers Blanket Insurance, several specific covers are provided covering virtually every risk associated with a bank. It's a package of various risks squeezed in one policy. Banker's Indemnity Insurance or Bankers blanket insurance is a combination of several specific covers, such as fire, burglary, money-in-transit, fidelity guarantee etc. The policy provides indemnity for direct loss of money and/or securities sustained by the insured and discovered during the period specified in the policy."
    },
    {
        "questionId": "Q50",
        "question": "Settlement of claims is one of the important functions in an",
        "options": [
            {"id": "A", "text": "Service organization"},
            {"id": "B", "text": "Insurance organization"},
            {"id": "C", "text": "NGO"},
            {"id": "D", "text": "Industrial organization"},
            {"id": "E", "text": "Government organization"}
        ],
        "correctOption": "B",
        "explanation": "Insurers are in the business of taking risk at a cost. Cost is the premium to be paid by the insured and the risk is paying the claims for the subject matter when the same is damaged/ destroyed by the insured peril. None of the other stated options fits the role of insurance organization."
    },
    {
        "questionId": "Q51",
        "question": "What is the maximum weekly amount which can be claimed under the temporary total disablement benefit of a PA policy?",
        "options": [
            {"id": "A", "text": "Rs 3000"},
            {"id": "B", "text": "Rs 4000"},
            {"id": "C", "text": "Rs 5000"},
            {"id": "D", "text": "Rs 8000"},
            {"id": "E", "text": "Rs 10000"}
        ],
        "correctOption": "A",
        "explanation": "Weekly payment on account of Temporary Total Disablement (TTD) is paid @ 1% of the capital sum insured subject to a maximum of Rs 3000 per week for 100 weeks irrespective of the policy St."
    },
    {
        "questionId": "Q52",
        "question": "An open cover is not a policy but is more like a",
        "options": [
            {"id": "A", "text": "Document note"},
            {"id": "B", "text": "Debit note"},
            {"id": "C", "text": "Bank note"},
            {"id": "D", "text": "Agreement"},
            {"id": "E", "text": "Credit note"}
        ],
        "correctOption": "D",
        "explanation": "Open cover is an unstamped document in the form of an agreement wherein there is no sum insured defined. Insured may send any number of consignments on the mutually agreed terms. Once a consignment is sent, a separate policy or certificate of insurance may be issued for the same."
    },
    {
        "questionId": "Q53",
        "question": "ILU stands for",
        "options": [
            {"id": "A", "text": "Institute of London universities"},
            {"id": "B", "text": "Institute of London underwriters"},
            {"id": "C", "text": "Institute of London undertakers"},
            {"id": "D", "text": "Institute of London UNICEF"},
            {"id": "E", "text": "Institute of London unified"}
        ],
        "correctOption": "B",
        "explanation": "For import/export policies under marine cargo insurance, the risk coverage's are defined under the Institute Cargo Clauses which are drafted by Institute of London underwriters."
    },
    {
        "questionId": "Q54",
        "question": "What happens to the risk if the deposit to the credit of the insured is insufficient to cover a consignment in transit?",
        "options": [
            {"id": "A", "text": "The risk is terminated"},
            {"id": "B", "text": "The risk is equal to the entire amount of the policy value"},
            {"id": "C", "text": "The risk is equal to the entire amount of commission"},
            {"id": "D", "text": "The risk is equal to the entire amount of discount."},
            {"id": "E", "text": "The risk is equal to the entire amount of premium pald"}
        ],
        "correctOption": "A",
        "explanation": "Section 64 VB of Insurance Act 1938 refers to advance payment of premium, guaranteed to be paid or until deposit of premium. Therefore if the premium is insufficient or is not guaranteed, the policy terminates."
    },
    {
        "questionId": "Q55",
        "question": "What is the validity period of a cover note in Motor Insurance?",
        "options": [
            {"id": "A", "text": "20 days"},
            {"id": "B", "text": "40 days"},
            {"id": "C", "text": "60 days"},
            {"id": "D", "text": "80 days"},
            {"id": "E", "text": "100 days"}
        ],
        "correctOption": "C",
        "explanation": "Initial validity of the cover note is 15 days & it could be extended up to 60 days. It is expected that the policy would be issued within this period & the cover note would be invalid thereafter, Cover note is issued when the policy cannot be issued for any reason l.e. vehicle registration number."
    },
    {
        "questionId": "Q56",
        "question": "The social scenario of",
        "options": [
            {"id": "A", "text": "Deflation"},
            {"id": "B", "text": "Unemployment"},
            {"id": "C", "text": "Down fall in markets"},
            {"id": "D", "text": "Boom"},
            {"id": "E", "text": "Economic depression"}
        ],
        "correctOption": "E",
        "explanation": "Poverty is the root cause of crimes & it's linked with the economic depression. Under economic depression, not enough employment could be generated. Burglaries consequent upon poverty & unemployment may be controlled to a greater extent with the growth of economy."
    },
    {
        "questionId": "Q57",
        "question": "Which policy is issued to business premises covering stock in trade, goods held in trust or on Commission and cash in locked safe?",
        "options": [
            {"id": "A", "text": "Bhavishya Arogya policy"},
            {"id": "B", "text": "Mediclaim insurance policy"},
            {"id": "C", "text": "Liability only policy"},
            {"id": "D", "text": "Burglary insurance policy"},
            {"id": "E", "text": "Universal health insurance policy"}
        ],
        "correctOption": "D",
        "explanation": "The burglary insurance policy is meant for business premises. It covers damages to the premises (immovable assets like fixtures & fittings) caused by the burglars & burglary of cash in safe (immovable assets)."
    },
    {
        "questionId": "Q58",
        "question": "Super heaters, steam pipes, boilers, economizers and other steam or air pressure are insurable under",
        "options": [
            {"id": "A", "text": "Fire insurance"},
            {"id": "B", "text": "Boller insurance"},
            {"id": "C", "text": "Aviation insurance"},
            {"id": "D", "text": "Engineering insurance"},
            {"id": "E", "text": "Marine insurance"}
        ],
        "correctOption": "B",
        "explanation": "The policy is known as Boiler and Pressure Plant Insurance (BPP) which covers damages to boilers, economizers, super heaters, steam pipes, air recovers and other steam or air pressure caused by explosion. The damages would not be payable if the loss is caused by fire."
    },
    {
        "questionId": "Q59",
        "question": "Under which head are the General Reserves categorized ?",
        "options": [
            {"id": "A", "text": "Liabilities"},
            {"id": "B", "text": "Contingency reserve"},
            {"id": "C", "text": "Capital reserves"},
            {"id": "D", "text": "Reserve and surplus"},
            {"id": "E", "text": "Loans and advances"}
        ],
        "correctOption": "A",
        "explanation": "The general reserves are the retained earnings of a company which are kept aside out of company's profits to meet future (known or unknown) obligations (Liabilities)."
    },
    {
        "questionId": "Q60",
        "question": "The companies should review the rates frequently in light of changing claims experience in",
        "options": [
            {"id": "A", "text": "Classes of risks"},
            {"id": "B", "text": "Continuous classes of risk"},
            {"id": "C", "text": "Sudden classes of risks"},
            {"id": "D", "text": "General classes of risks"},
            {"id": "E", "text": "Various classes of risks"}
        ],
        "correctOption": "E",
        "explanation": "The profitability of insurers depends upon proper pricing (underwriting) based upon claims experience, It is therefore essential that the companies must review the ever changing claims experience in various classes of business."
    },
    {
        "questionId": "Q61",
        "question": "With whom has the Premium rates, Policy terms and Underwriting guidelines have to be filed ?",
        "options": [
            {"id": "A", "text": "Insurance regulator"},
            {"id": "B", "text": "RBI"},
            {"id": "C", "text": "Controller of insurance"},
            {"id": "D", "text": "Policy holders association"},
            {"id": "E", "text": "Finance ministry"}
        ],
        "correctOption": "A",
        "explanation": "Insurance regulator i.e. IRDA is the sole authority on all aspects of insurance business in India. The IRDA is the watch dog of insurance activities working under the Finance ministry."
    },
    {
        "questionId": "Q62",
        "question": "Traders can suffer losses by reason of insolvency of or protracted default in payment on the part of",
        "options": [
            {"id": "A", "text": "Sellers"},
            {"id": "B", "text": "Vendors"},
            {"id": "C", "text": "Consumers"},
            {"id": "D", "text": "Buyers"},
            {"id": "E", "text": "Suppliers"}
        ],
        "correctOption": "D",
        "explanation": "Cash flow problems arises if for example, the customers/ buyers fail to pay money they owe to the traders, that mean traders cannot pay their debts as they fall due."
    },
    {
        "questionId": "Q63",
        "question": "The Dumpers and tippers are insured under",
        "options": [
            {"id": "A", "text": "Motor"},
            {"id": "B", "text": "Fire insurance"},
            {"id": "C", "text": "Machinery breakdown"},
            {"id": "D", "text": "Marine cargo"},
            {"id": "E", "text": "Marine hull"}
        ],
        "correctOption": "A",
        "explanation": "Commercial vehicles are insured under India Motor Tariff. These are further classified into miscellaneous vehicles. Dumpers & tippers come under the preview of this class of vehicles."
    },
    {
        "questionId": "Q64",
        "question": "A person has the following material in his factory: Raw materials - Rs 10,00,000: Finished Goods Rs. 16,00,000 Semi Finished Goods - Rs 4,00,000. There is a bank mortgage of Rs 10,00,000 on these stocks. What is the value of goods he has to insure?",
        "options": [
            {"id": "A", "text": "Rs 16,00.000"},
            {"id": "B", "text": "Rs 30,00,000"},
            {"id": "C", "text": "Rs 20,00,000"},
            {"id": "D", "text": "Rs 10,00,000"},
            {"id": "E", "text": "Rs 40,00,000"}
        ],
        "correctOption": "B",
        "explanation": "Value to be insured or SI is the total value of material at risk. The total cost of material in this case is raw material, semi-finished goods & finished goods. Total of all the three is Rs 30,00,000 hence this is the value to be insured. Bank mortgage is not material for insurance. However the insurance cannot be for less than the mortgage amount else the bank would not mortgage."
    },
    {
        "questionId": "Q65",
        "question": "Concentrated efforts should be made by the insurance companies to review and reduce the",
        "options": [
            {"id": "A", "text": "Normal expenses ratio"},
            {"id": "B", "text": "Fluctuating expenses ratio"},
            {"id": "C", "text": "Management expenses ratio"},
            {"id": "D", "text": "General expenses ratio"},
            {"id": "E", "text": "Expenses ratio"}
        ],
        "correctOption": "C",
        "explanation": "The profitability of an insurance company depends upon controlling expenses. Expenses comprises of claim expenses & management expenses. Since the claims are unpredictable, an insurer would do well if it is able to control its management expense ratio"
    },
    {
        "questionId": "Q66",
        "question": "The natural peril covered under a standard fire policy is",
        "options": [
            {"id": "A", "text": "Storm"},
            {"id": "B", "text": "Riot & strike"},
            {"id": "C", "text": "Malicious damage"},
            {"id": "D", "text": "Aircraft damage"},
            {"id": "E", "text": "Explosion"}
        ],
        "correctOption": "A",
        "explanation": "Natural perils are the losses which are beyond the capabilities of any human being. Storm cannot be caused by humans whereas rest of the perils is man-made perils caused by human interventions."
    },
    {
        "questionId": "Q67",
        "question": "Warehousing facilities and Loading/unloading conditions are things to be looked in a",
        "options": [
            {"id": "A", "text": "Lift insurance"},
            {"id": "B", "text": "Public liability insurance"},
            {"id": "C", "text": "Store insurance"},
            {"id": "D", "text": "Hull insurance"},
            {"id": "E", "text": "Cargo insurance"}
        ],
        "correctOption": "E",
        "explanation": "Cargo refers to the goods carried upon vessels of any description. Conditions pertaining to loading, unloading & warehousing are vital underwriting parameters. The condition of port of origin & port of discharge also plays vital role in deciding the premium rates for cargo insurance under marine insurance policies. These are equally important for inland traneit or import & exports."
    },
    {
        "questionId": "Q68",
        "question": "In which of these insurance is cashless facility available?",
        "options": [
            {"id": "A", "text": "Motor insurance"},
            {"id": "B", "text": "Aviation insurance"},
            {"id": "C", "text": "Hull insurance."},
            {"id": "D", "text": "Cargo insurarice"},
            {"id": "E", "text": "Fire insurance"}
        ],
        "correctOption": "A",
        "explanation": "Motor insurance & health insurance are top selling products of any Non-life insurers. Both products constitute the largest share of insurer's portfolio. The competition & loss control measures, prompted the insurers to offer cashless service for these products."
    },
    {
        "questionId": "Q69",
        "question": "Which one these perils is covered under Institute cargo clause (B)?",
        "options": [
            {"id": "A", "text": "Bursting/tearing of bags"},
            {"id": "B", "text": "Hook damage"},
            {"id": "C", "text": "Volcanic eruption"},
            {"id": "D", "text": "Theft pilferage"},
            {"id": "E", "text": "Partial loss of package"}
        ],
        "correctOption": "C",
        "explanation": "Volcanic Eruption is an inbuilt cover under ICC (B) where as other risks to the cargo can be covered on payment of additional premium."
    },
    {
        "questionId": "Q70",
        "question": "Which commission entertains disputes, where goods/services and the compensation claimed exceeds Rs 100 Lakhs ?",
        "options": [
            {"id": "A", "text": "Central Commission"},
            {"id": "B", "text": "National Commission"},
            {"id": "C", "text": "State Commission"},
            {"id": "D", "text": "District forum"},
            {"id": "E", "text": "Local Commission"}
        ],
        "correctOption": "C",
        "explanation": "As per revised pecuniary jurisdiction for entertaining consumer complaints, State Commission can accept complaints from consumer if the value of goods or services is more than 50 Lakh to 2 crores."
    },
    {
        "questionId": "Q71",
        "question": "What are the broad functions of Tariff advisory committee?",
        "options": [
            {"id": "A", "text": "Regulate share values"},
            {"id": "B", "text": "Regulate market rales"},
            {"id": "C", "text": "Regutale policy rates"},
            {"id": "D", "text": "Regulate claim value"},
            {"id": "E", "text": "Regulate the premium rates"}
        ],
        "correctOption": "E",
        "explanation": "Tariff Advisory Committee (TAC) in India controls and regulates the rates, advantages, terms and conditions that may be offered by insurers in respect of Indian General Insurance Business relating to Fire, Marine (Hull), Motor, Engineering & Workmen Compensation."
    },
    {
        "questionId": "Q72",
        "question": "Obtaining detailed information of clients business is the duty of",
        "options": [
            {"id": "A", "text": "Sales agents"},
            {"id": "B", "text": "Indirect brokers"},
            {"id": "C", "text": "Business agents"},
            {"id": "D", "text": "Direct brokers"},
            {"id": "E", "text": "Traders"}
        ],
        "correctOption": "D",
        "explanation": "Direct brokers came into the insurance market after IRDA (Insurance Brokers) Regulations, 2002. They act as an intermediary between insured &the insurers to obtain client's detalled information for insurance."
    },
    {
        "questionId": "Q73",
        "question": "Which authority can intervene in the affairs of an insurer?",
        "options": [
            {"id": "A", "text": "Any legal regulatory body"},
            {"id": "B", "text": "IRDAI"},
            {"id": "C", "text": "Central Government"},
            {"id": "D", "text": "Policy holder"},
            {"id": "E", "text": "State Government"}
        ],
        "correctOption": "B",
        "explanation": "IRDA is a sole authority which can intervene in any affairs of an insurer l.e. both Life as well as Non-life insurers. Its authority is derived through an Act of Parliament, thus the recommendations are binding on insurers."
    },
    {
        "questionId": "Q74",
        "question": "What is the term used for loss or damage to buildings, machinery, stocks etc. by fire and other perils?",
        "options": [
            {"id": "A", "text": "Loss of personnel"},
            {"id": "B", "text": "Loss of legal liabilities"},
            {"id": "C", "text": "Loss of assets"},
            {"id": "D", "text": "Lass of profit"},
            {"id": "E", "text": "Loss of finance"}
        ],
        "correctOption": "C",
        "explanation": "Fire policy covers two types of losses le. Loss of capital & Loss of revenue. Revenue losses are covered under loss of profit policy le. Fire Loss of Profit, whereas capital losses are covered under Fire policy. Assets are listed against the capital in the balance sheet of any company. Building, machinery stocks etc. all forms the assets."
    },
    {
        "questionId": "Q75",
        "question": "The General insurance Corporation is also commonly known as",
        "options": [
            {"id": "A", "text": "Government Re-Insurer"},
            {"id": "B", "text": "Trusted reinsurer"},
            {"id": "C", "text": "Reinsurer"},
            {"id": "D", "text": "National reinsurer"},
            {"id": "E", "text": "Global reinsurer"}
        ],
        "correctOption": "D",
        "explanation": "GIC or General insurance Corporation is national reinsurer is an approved Indian reinsurer set up to retain maximum reinsurance business in India to conserve the precious foreign exchange & to develop the reinsurance capacity."
    },
    {
        "questionId": "Q76",
        "question": "The Premium Register copy is must for",
        "options": [
            {"id": "A", "text": "Underwriting bank statements"},
            {"id": "B", "text": "Underwriting loans"},
            {"id": "C", "text": "Underwriting returns"},
            {"id": "D", "text": "Underwriting balance sheet"},
            {"id": "E", "text": "Underwriting services"}
        ],
        "correctOption": "C",
        "explanation": "The primary business of an insurance company is generating premium income & paying claims. Payment of claims is the prime reason why the insurers are in business. Underwriting returns are computed on the basis of premium register."
    },
    {
        "questionId": "Q77",
        "question": "The full form of ALOP is",
        "options": [
            {"id": "A", "text": "Advance loss of property."},
            {"id": "B", "text": "Advance loss of penalty"},
            {"id": "C", "text": "Advance loss of policy"},
            {"id": "D", "text": "Advance loss of profits"},
            {"id": "E", "text": "Advance loss of pension"}
        ],
        "correctOption": "D",
        "explanation": "ALOP is an abbreviation for Advance loss of Profit policy issued under the engineering insurance. It is designed to cover losses associated with the delays in commissioning of a project due to an insured peril"
    },
    {
        "questionId": "Q78",
        "question": "The amount of relief fixed under Compulsory Public Liability policy in case of death and Permanent total liability is",
        "options": [
            {"id": "A", "text": "Rs 20000"},
            {"id": "B", "text": "R 25000"},
            {"id": "C", "text": "Rs 30000"},
            {"id": "D", "text": "Rs 35000"},
            {"id": "E", "text": "Rs 50000"}
        ],
        "correctOption": "B",
        "explanation": "This policy arises out of The Public Liability Insurance Act, 1991. The act imposes a liability based upon the principle of 'No Fault'. Any undertaking handling hazardous substance has to compulsorily insure & pay according to the act for death or injury to any person (other than workmen) & damage to the property."
    },
    {
        "questionId": "Q79",
        "question": "Which of these terms refer to 'Partially Damaged Property'?",
        "options": [
            {"id": "A", "text": "Claim"},
            {"id": "B", "text": "Risk"},
            {"id": "C", "text": "Premium"},
            {"id": "D", "text": "Salvage"},
            {"id": "E", "text": "Damage"}
        ],
        "correctOption": "D",
        "explanation": "Partially damaged property is known as salvage. The salvage is can either be sold to the salvage buyers or its value is deducted from the claim amount."
    },
    {
        "questionId": "Q80",
        "question": "On which act are the transaction of general insurance business in India based on?",
        "options": [
            {"id": "A", "text": "Motor vehicles act"},
            {"id": "B", "text": "Fire Insurance act"},
            {"id": "C", "text": "Insurance act 1938 and IRDAI act 1999"},
            {"id": "D", "text": "Liability insurance act"},
            {"id": "E", "text": "Marine insurance act"}
        ],
        "correctOption": "C",
        "explanation": "A comprehensive act known as insurance Act 1938, was introduced to control both life & non-life insurance in India. In 1999, further act was passed by the partiament to regulate, promote & to ensure orderly growth of insurance as well as reinsurance business."
    },
    {
        "questionId": "Q81",
        "question": "policies provide cover against loss of profits (machinery) Insurance/advance loss of Profits?",
        "options": [
            {"id": "A", "text": "Marine Insurance"},
            {"id": "B", "text": "Fire insurance"},
            {"id": "C", "text": "Engineering insurance"},
            {"id": "D", "text": "Burglary Insurance"},
            {"id": "E", "text": "Floating insurance"}
        ],
        "correctOption": "C",
        "explanation": "Loss of Profit (machinery or MLOP) & Advance Loss of Profit (ALOP) are the subject matter of Engineering Insurance. Under these policies, the claim would only be payable if the losses are payable under other engineering policies."
    },
    {
        "questionId": "Q82",
        "question": "It is possible to provide the reserve for each policy separately by calculating",
        "options": [
            {"id": "A", "text": "Number of period"},
            {"id": "B", "text": "Number of days"},
            {"id": "C", "text": "Number of year"},
            {"id": "D", "text": "Number of weeks"},
            {"id": "E", "text": "Number of months"}
        ],
        "correctOption": "B",
        "explanation": "Although the policies are issued for 1 year, certain policies like dwellings under fire insurance can be issued for more than one year. The reserve therefore has to be provided keeping number of days the policy would be effective."
    },
    {
        "questionId": "Q83",
        "question": "The long term insurance policies are suitable for",
        "options": [
            {"id": "A", "text": "Industrai customers"},
            {"id": "B", "text": "SME customers"},
            {"id": "C", "text": "Multinational customers"},
            {"id": "D", "text": "Retail customers"},
            {"id": "E", "text": "Commercial customers"}
        ],
        "correctOption": "D",
        "explanation": "The risk associated with retail customer does not undergo major changes for a long time. For an example in case of fire, coverage required for a dwelling (residential building), the risk/ valuation more or less remains constant, long term policy can be issued. The long term means where is policy is sought for more than 12 months (as under JPA long term policy)."
    },
    {
        "questionId": "Q84",
        "question": "The margin for commission built into the rates should be that level at which the",
        "options": [
            {"id": "A", "text": "Commission"},
            {"id": "B", "text": "Premium"},
            {"id": "C", "text": "Claim"},
            {"id": "D", "text": "Cash"},
            {"id": "E", "text": "Bonus"}
        ],
        "correctOption": "B",
        "explanation": "Premium consists of cost of taking the risk & management expenses. The management expenses include all costs including commission."
    },
    {
        "questionId": "Q85",
        "question": "In which year was the Insurance Act passed?",
        "options": [
            {"id": "A", "text": "1928"},
            {"id": "B", "text": "1938"},
            {"id": "C", "text": "1948"},
            {"id": "D", "text": "1952"},
            {"id": "E", "text": "1962"}
        ],
        "correctOption": "B",
        "explanation": null
    },
    {
        "questionId": "Q86",
        "question": "What is the amount of claim payable under franchise limit is 400 when the amount of loss is Rs 580?",
        "options": [
            {"id": "A", "text": "Rs. 400"},
            {"id": "B", "text": "Rs. 580"},
            {"id": "C", "text": "Rs 200"},
            {"id": "D", "text": "Rs 290"},
            {"id": "E", "text": "ONIL"}
        ],
        "correctOption": "B",
        "explanation": "Franchise is a qualifying amount under which if the pre-determined limit (franchise limit) is crossed, the claim is paid in full without any deduction."
    },
    {
        "questionId": "Q87",
        "question": "By purchasing insurance one can",
        "options": [
            {"id": "A", "text": "Reduce"},
            {"id": "B", "text": "Avoid"},
            {"id": "C", "text": "Ellminate"},
            {"id": "D", "text": "Assume"},
            {"id": "E", "text": "Shin"}
        ],
        "correctOption": "E",
        "explanation": "Purchasing an insurance policy is a common method of transferring risk. When an Individual or entity purchases insurance, it shifts the financial risks of certain identified adverse outcomes occurring within a mutually agreed period to the insurance company. Insurance companies typically charge a fee an insurance premium for accepting such risks."
    },
    {
        "questionId": "Q88",
        "question": "Identify the incorrect statement regarding the clause of Arbitration.",
        "options": [
            {"id": "A", "text": "Arbitration is a cheaper and faster method of resolution of disputes"},
            {"id": "B", "text": "Arbitration will be govemed by the provisions of Arbitration and Conciliation Act 1996"},
            {"id": "C", "text": "Arbitration means a private method of dispute resolution out of Court of law"},
            {"id": "D", "text": "Arbitration will apply for claim disputes rejected by the insurer"},
            {"id": "E", "text": "Arbitration will apply for disputes on the claim amount payable where the liability has been admitted by the insurer"}
        ],
        "correctOption": "D",
        "explanation": "Any dispute regarding the amount of claim payable (liability having been admitted by the insurers) shall be referred to arbitration as per the provisions of the Arbitration and Conciliation Act, 1996. Arbitration is a private method of dispute resolution out of the court of law and is faster and cheaper than the process of litigation."
    },
    {
        "questionId": "Q89",
        "question": "Under which insurance is protection offered to professionals against their legal liability, for payment of damages due to negligence while performing their professional duties?",
        "options": [
            {"id": "A", "text": "Product Liability Insurance"},
            {"id": "B", "text": "Employer's Liability Insurance"},
            {"id": "C", "text": "Professional Indemnities Insurance"},
            {"id": "D", "text": "Third Party Liability Insurance"},
            {"id": "E", "text": "Public Liability Insurance"}
        ],
        "correctOption": "C",
        "explanation": "Professional indemnities are designed to provide insurance protection to professionals such as doctors, solicitors, chartered accountants, architects etc. against their legal liability to pay damages arising out of negligence in performance of their their professional duties."
    },
    {
        "questionId": "Q90",
        "question": "is not an exclusion under a Personal accident policy.",
        "options": [
            {"id": "A", "text": "Service in armed forces"},
            {"id": "B", "text": "Suicide"},
            {"id": "C", "text": "Engaging in aviation as a trainee pilot"},
            {"id": "D", "text": "Passenger of a licensed standard type of aircraft"},
            {"id": "E", "text": "Influence of liquor"}
        ],
        "correctOption": "D",
        "explanation": "A personal accident policy can be extended by endorsement, on payment of extra premium to cover medical expenses incurred by the insured in connection with the accidental bodity injury, subject to specified limits. War risk cover can be granted to Indian personnel/ experts working in foreign countries on civilian duties at additional premium. Exclusions (Some examples) are suicide, influence of liquor or drugs, service in armed forces, engaging in aviation except as passenger in licensed standard type of aircraft."
    },
    {
        "questionId": "Q91",
        "question": "As per SFSPP, stocks in process blocks, godowns and/or in open cannot be covered in one Sum Insured except in which case?",
        "options": [
            {"id": "A", "text": "In case of textile factories only"},
            {"id": "B", "text": "If the process block only is affected by loss"},
            {"id": "C", "text": "If the insured is willing to bear additional premium equal to at least twice the regular premium"},
            {"id": "D", "text": "If in case of a loss, insured agrees to bear a higher excess"},
            {"id": "E", "text": "By using a floater policy clause"}
        ],
        "correctOption": "E",
        "explanation": "A standard fire and special perils (SFSPP) policy provides protection against loss due to fire and related perlis. A floater policy covers stocks at various specific locations under one sum insured. The insured may have stocks in two or more godowns. He is able to declare for insurance the total value of goods in all godowns but not separate values for each godown. Unspecified locations are not allowed. Similarly, in a manufacturing risk, the stocka in the process blocks, godowns and/or in the open can be covered under one sum insured."
    },
    {
        "questionId": "Q92",
        "question": "An insured with a TP (third party) Liability Policy reports his customer having lodged a claim for defective product and forwards to the insurer claim notice with product details. The insurer should",
        "options": [
            {"id": "A", "text": "Advise the insured that the claim does not fall under the policy taken"},
            {"id": "B", "text": "Not do anything as this is merely a claim intimation"},
            {"id": "C", "text": "Immediately appoint a CA surveyor"},
            {"id": "D", "text": "Ask for thorough investigation by reporting the matter to the Commerce Ministry"},
            {"id": "E", "text": "Proceed to issue a Product Liability Policy to the client"}
        ],
        "correctOption": "A",
        "explanation": "The employers llability Insurances emphasised the need for third party Claims from third parties against manufacturers for death or bodily injuries due to defective products led to the introduction of products liability insurance. A Third Party (TP) Liability Policy typically covers claims for bodily injury or property damage causad to a third party due to the insured's negligence. However, a claim for a defective product would generally fall under a Product Liability Policy, not a TP Liability Policy."
    },
    {
        "questionId": "Q93",
        "question": "Explain how the Rate on Line method works?",
        "options": [
            {"id": "A", "text": "This method helps to arrive at a rate which needs no further adjustment, on basis of past incurred losses and the expected future exposure"},
            {"id": "B", "text": "This method is based on average past lost experience for the particular risk type over period of around five years."},
            {"id": "C", "text": "This method is based on expected losses and takes into consideration globally industry wise, line wise figures."},
            {"id": "D", "text": "This method involves taking the anticipated loss experience of the particular risk and rating it individually,"},
            {"id": "E", "text": "This method is based on the period during which it expects to recover its cost of limits provided."}
        ],
        "correctOption": "E",
        "explanation": "Rate on Line: This rating method should be used to reflect the price per million, in local currency unit, applied to the limit of indemnity, or to reflect premium needed for a period of years to cover the cost of the limit(s) provided. It is primarily used for accounts, which reveal characteristics of high severity/low frequency potential and risks with high limits of indemnity."
    },
    {
        "questionId": "Q94",
        "question": "Which of the following may result into moral hazard with reference to generic questions of insurance proposal?",
        "options": [
            {"id": "A", "text": "Conviction"},
            {"id": "B", "text": "Declaration"},
            {"id": "C", "text": "Consolidation"},
            {"id": "D", "text": "Exposure"},
            {"id": "E", "text": "Claim experience"}
        ],
        "correctOption": "A",
        "explanation": "Generic questions are common to all insurance proposal forms. One of them is convictions which may give lead into moral hazard."
    },
    {
        "questionId": "Q95",
        "question": "The full form of DOS is",
        "options": [
            {"id": "A", "text": "Department of Science"},
            {"id": "B", "text": "Delay of Start"},
            {"id": "C", "text": "Deterioration of Stock"},
            {"id": "D", "text": "Damage of Stock"},
            {"id": "E", "text": "Diagnosis of Sickness"}
        ],
        "correctOption": "C",
        "explanation": "The policy known as Deterioration of Stock (DOS) Insurance or Stock spoilage insurance is a form of consequential loss cover granted in the Engineering Department for stocks contained in large cold stores. The cover is against the risk of deterioration/putrefaction and contamination following breakdown of the refrigeration plant and machinery, a claim for which is admissible in terms of the concurrent Machinery Breakdown Policy."
    },
    {
        "questionId": "Q96",
        "question": "Policy under Group Health insurance scheme can be accepted in",
        "options": [
            {"id": "A", "text": "EMI"},
            {"id": "B", "text": "Debentures"},
            {"id": "C", "text": "Loans"},
            {"id": "D", "text": "Mortgages"},
            {"id": "E", "text": "Instaliments"}
        ],
        "correctOption": "E",
        "explanation": "The group health insurance policies are issued to corporates etc. where the premium is usually very substantial. Insurers offer the policy to such insured's by offering the premium payment in instaliments."
    },
    {
        "questionId": "Q97",
        "question": "As per IRDAI, which document is compulsory for acceptance of all insurances except Marine Cargo ?",
        "options": [
            {"id": "A", "text": "Proposal form"},
            {"id": "B", "text": "Endorsement"},
            {"id": "C", "text": "Renewal notice"},
            {"id": "D", "text": "Policy form"},
            {"id": "E", "text": "Claim form"}
        ],
        "correctOption": "A",
        "explanation": "As per IRDA regulations, proposal forms are required to be used in all classes of insurance except marine cargo. However it is required in case of marine hull insurance. Sometimes it is usual to obtain a questionnaire duly completed."
    },
    {
        "questionId": "Q98",
        "question": "The full form of MACT is",
        "options": [
            {"id": "A", "text": "Major Accident Claim Tribunal"},
            {"id": "B", "text": "Motor & Aviation Claim Tribunal."},
            {"id": "C", "text": "Maximum Action Core Team"},
            {"id": "D", "text": "Motor Accident Claim Tribunal"},
            {"id": "E", "text": "Motor accident Cause tribunal"}
        ],
        "correctOption": "D",
        "explanation": "Third party claims are being dealt by MACT which awards the compensation to the victims of motor vehicles accidents."
    },
    {
        "questionId": "Q99",
        "question": "What is the cause of Hit and Run accidents?",
        "options": [
            {"id": "A", "text": "Marathon Runners"},
            {"id": "B", "text": "Pedestrians"},
            {"id": "C", "text": "Watercraft"},
            {"id": "D", "text": "Motor vehicles"},
            {"id": "E", "text": "Cycles"}
        ],
        "correctOption": "D",
        "explanation": "Where the vehicle after an accident ran away & in spite of the reasonable efforts by the police authortbes, the vehicle remains untraced, the event is known as Hit & Run. This event has to be covered under all motor policies due to provisions of Section 163 of The Motor Vehicles Act, 1988."
    },
    {
        "questionId": "Q100",
        "question": "A businessman has the following policies covering stocks: Policy A for 800000; Policy B for 1000000; Policy C for 200000. The stocks to the tune of 200000 are damaged due to rioters. What is the claim payable under policy A?",
        "options": [
            {"id": "A", "text": "Rs 200000"},
            {"id": "B", "text": "Rs 100000"},
            {"id": "C", "text": "Rs 80000"},
            {"id": "D", "text": "Rs 65000"},
            {"id": "E", "text": "NIL"}
        ],
        "correctOption": "C",
        "explanation": "As per the Contribution Clause, each company would pay claim in the same proportion in which insurance has been taken by the customer. Total Insurance taken is for Rs. 8 lakhs plus Rs. 10 lakhs plus Rs. 2 lakhs Rs. 20 Lacs. Share of Company A8 Lacs/20 Lacs = 40% Hence, company A would pay 40% of the loss amount Le. 40% of Rs 2 lakhs Rs. 80000"
    }
],
    "ic11Mock6":[
    {
        "questionId": "Q.1.",
        "question": "Choose the reason for creating unexpired risk reserves.",
        "options": [
            {"id": "A", "text": "As there is less than required data on expected claims"},
            {"id": "B", "text": "As the quality of risk is not ascertained correctly"},
            {"id": "C", "text": "As there are policies with expiry dates in near future"},
            {"id": "D", "text": "As premiums are inadequate"},
            {"id": "E", "text": "As expected claims are not considered"}
        ],
        "correctOption": "C",
        "explanation": "Unexpired risk reserves are established to cover liabilities for policies whose expiration date is in the near future. This reserve ensures that the insurer has sufficient funds to meet claims for the remaining period of the policy."
    },
    {
        "questionId": "Q.2.",
        "question": "What is the term used to refer to excess of value of assets over value of liabilities?",
        "options": [
            {"id": "A", "text": "Available Solvency Margin"},
            {"id": "B", "text": "Excess Valuation"},
            {"id": "C", "text": "Adjustment Margin"},
            {"id": "D", "text": "Asset Liquidation Margin"},
            {"id": "E", "text": "Profit Margin"}
        ],
        "correctOption": "A",
        "explanation": "The available solvency margin refers to the amount by which an insurer's assets exceed its liabilities, ensuring that it can meet its obligations to policyholders. It is a measure of financial stability and strength, indicating the insurer's capacity to withstand unexpected losses. In many regulatory frameworks, a certain level of solvency margin is required to ensure that insurance companies remain solvent and can cover claims. The available solvency margin is typically calculated as: Available Solvency Margin = Total Assets - Total Liabilities. A positive solvency margin indicates that the insurer has sufficient assets to cover its liabilities, while a negative margin suggests potential financial distress."
    },
    {
        "questionId": "Q.3.",
        "question": "Which of the following is not a part of the second step while calculating large claim reserves?",
        "options": [
            {"id": "A", "text": "Reviewing and refining the data"},
            {"id": "B", "text": "Dividing data into practical subclasses"},
            {"id": "C", "text": "Construct auditable reserves"},
            {"id": "D", "text": "Gathering of data"},
            {"id": "E", "text": "Instructing the insured to take preventive measures"}
        ],
        "correctOption": "E",
        "explanation": "Larger and more complex claims: This will be controlled by a more experienced handler and by gauging the claims circumstances and using their own experience; they should be able to make a subjective judgement on the estimate. It is crucial that the claims reserves are revisited regularly to ensure that the figures are as up-to-date as possible. The system will then hold and total up all claims reserves in real time, to produce the open claims reserve. The next step is for the claims professionals and actuaries to: bring the data together, break it down into practical sub-classes, review and refine it, build in provisions for IBNR, and construct auditable reserves."
    },
    {
        "questionId": "Q.4.",
        "question": "From which organizations can war risk insurance cover on marine hulls be taken?",
        "options": [
            {"id": "A", "text": "The United Nations (UN)"},
            {"id": "B", "text": "Only Foreign Insurers"},
            {"id": "C", "text": "Only Indian Insurers"},
            {"id": "D", "text": "War risk cover is not permitted"},
            {"id": "E", "text": "The International Monetary Fund (IMF)"}
        ],
        "correctOption": "C",
        "explanation": "War Risks Insurance on Marine Hulls: Insurance on Indian marine hulls covering All Risks against war and other allied risks arising out of civil commotion, political or labour disturbances etc. are required to be obtained from the Insurers in India only."
    },
    {
        "questionId": "Q.5.",
        "question": "Karan, an insurer, has invested a huge sum in junk bonds. Unfortunately, an upheaval in the bonds market causes a crisis, due to which there is a crash in the prices of the junk bonds. This is certainly not a _______ investment.",
        "options": [
            {"id": "A", "text": "Rash"},
            {"id": "B", "text": "Risky"},
            {"id": "C", "text": "Foolhardy"},
            {"id": "D", "text": "Imprudent"},
            {"id": "E", "text": "Prudent"}
        ],
        "correctOption": "E",
        "explanation": "Investing a large amount in junk bonds, which are high-yield but high-risk investments, cannot be considered prudent. A prudent investment strategy involves careful planning, risk assessment, and maintaining a diversified portfolio to avoid significant losses during market crises. In the given scenario, the investment in junk bonds, which led to a financial loss, indicates a lack of prudence."
    },
    {
        "questionId": "Q.6.",
        "question": "Mr. Varun has an apartment in New York. He has paid premium in Indian rupees as he has availed insurance cover with an Indian insurer. Unfortunately a fire breaks out in the flat and it is reduced to ashes. What currency will the claim be settled in?",
        "options": [
            {"id": "A", "text": "Euros"},
            {"id": "B", "text": "Pound Sterling"},
            {"id": "C", "text": "Currency as per the policy holder's wish"},
            {"id": "D", "text": "Indian Rupees"},
            {"id": "E", "text": "US Dollars"}
        ],
        "correctOption": "D",
        "explanation": "Since the policy was issued by an Indian insurer and the premium was paid in Indian rupees, the claim will be settled in Indian rupees, regardless of the location of the insured property, unless the policy terms explicitly specify another arrangement."
    },
    {
        "questionId": "Q.7.",
        "question": "According to portability, existing policy is shifted to",
        "options": [
            {"id": "A", "text": "A policy of another genre (i.e. health to life or general) but with the same insurer"},
            {"id": "B", "text": "A policy with an overseas insurer"},
            {"id": "C", "text": "Another insurer for a policy of a particular type"},
            {"id": "D", "text": "A policy with a similar plan but with a different insurer"},
            {"id": "E", "text": "A policy for a different plan but with the same insurer"}
        ],
        "correctOption": "D",
        "explanation": "Portability in the context of insurance refers to transferring an existing policy to a similar plan with a different insurer. This allows the policyholder to retain their accrued benefits, such as the waiting period for pre-existing conditions, even after switching insurers."
    },
    {
        "questionId": "Q.8.",
        "question": "Jayant, an agricultural labourer, earns a monthly income of Rs.5,000. Which of the following options is suggested to cover his family from loss of income in case of his untimely death?",
        "options": [
            {"id": "A", "text": "An Endowment policy worth Rupees Six lakhs"},
            {"id": "B", "text": "Micro insurance"},
            {"id": "C", "text": "A Money Back policy worth Rupees Fifteen lakhs"},
            {"id": "D", "text": "An accident cover offered by a large insurance company"},
            {"id": "E", "text": "A Mediclaim policy"}
        ],
        "correctOption": "B",
        "explanation": "Micro insurance is specifically designed to offer affordable and accessible insurance coverage to low-income individuals and families. It typically provides essential protection at a lower premium, which would be suitable for someone with Jayant's income level. This way, his family can be covered from the loss of income in case of his untimely death without causing financial strain due to high premium costs."
    },
    {
        "questionId": "Q.9.",
        "question": "What are insurers required to do to manage the grievances or claims of senior citizens?",
        "options": [
            {"id": "A", "text": "Establish a separate channel or department to handle such matters"},
            {"id": "B", "text": "See to it that their customers do not include senior citizens"},
            {"id": "C", "text": "Appoint senior citizens as employees to deal with senior citizen customers"},
            {"id": "D", "text": "Enroll employees, having senior citizens in their family, in the claims department"},
            {"id": "E", "text": "Outsourcing matters related to processing of the grievances or claims"}
        ],
        "correctOption": "A",
        "explanation": "Insurance Regulatory Development Authority of India (IRDAI) has stipulated that Insurers and TPAs, shall establish a separate channel to address the health insurance related claims and grievances of senior citizens. Insurers are also encouraged to design health insurance policies for various groups, such as, specific age or gender or different age groups. In addition to this, the sector regulator IRDAI has mandated to the insurers, that the premium charged for health insurance products offered by Insurers to senior citizens shall be fair, justified, transparent and duly disclosed upfront."
    },
    {
        "questionId": "Q.10.",
        "question": "In which of the following conditions does the insured feel cheated?",
        "options": [
            {"id": "A", "text": "If insurance products are misrepresented"},
            {"id": "B", "text": "If insurance products are over priced"},
            {"id": "C", "text": "If insurance products are redrawn"},
            {"id": "D", "text": "If insurance products are over sold"},
            {"id": "E", "text": "If insurance products are withdrawn"}
        ],
        "correctOption": "B",
        "explanation": "Buyers of insurance are unable to find out whether the policy is over-priced. If products are over-priced, insured feel cheated. Under-pricing of insurance products can make insurers weak and unable to pay claims when the contingency arises. To ensure that insurance products are priced on proper technical and business factors, effective regulation is needed."
    },
    {
        "questionId": "Q.11.",
        "question": "Fortune Insurance Company has received a reinsurance business of Rs.90 crores from Goodwill Insurance Company. Goodwill has not yet paid claims amounting to Rs.4 crores, on the reinsured policies. How will this liability be shown by Fortune Insurance Company in its books?",
        "options": [
            {"id": "A", "text": "New business liability"},
            {"id": "B", "text": "Re-insurance liability"},
            {"id": "C", "text": "IBNR"},
            {"id": "D", "text": "Estimated liability"},
            {"id": "E", "text": "External liability"}
        ],
        "correctOption": "B",
        "explanation": "Fortune Insurance Company will show the liability of Rs.4 crores incurred by Goodwill Insurance Company on the reinsured policies as re-insurance liability in its books. This reflects the obligation of Fortune Insurance Company to cover the claim under the reinsurance agreement with Goodwill Insurance Company."
    },
    {
        "questionId": "Q.12.",
        "question": "Explain product filing guidelines.",
        "options": [
            {"id": "A", "text": "Guidelines laid down by the authority about the procedure to be followed before offering or marketing a Health Insurance Product"},
            {"id": "B", "text": "A procedure for filing policies issued"},
            {"id": "C", "text": "Guidelines regarding filing of all documents pertaining to a specific product"},
            {"id": "D", "text": "Guidelines regarding filing of customer data of a specific product"},
            {"id": "E", "text": "A procedure of filing proposal forms"}
        ],
        "correctOption": "A",
        "explanation": "Product filing guidelines are defined by the Insurance Regulatory Development Authority of India (IRDAI), Health Insurance Regulations, 2016 as guidelines specified by the Authority on the procedure to be followed by insurers before marketing or offering a product falling under the Health Insurance Business. These guidelines ensure that products meet certain standards and are approved for sale."
    },
    {
        "questionId": "Q.13.",
        "question": "By displaying information related to products of a Fast-Moving Consumer Goods (FMCG) company, a web aggregator",
        "options": [
            {"id": "A", "text": "Assists the likely buyers of insurance by providing information about a wide product range"},
            {"id": "B", "text": "Assists Fast-Moving Consumer Goods (FMCG) companies to begin insurance business"},
            {"id": "C", "text": "Assists insurance providers in maintaining low premium by earning through advertisements of FMCG products"},
            {"id": "D", "text": "Act against Web Aggregators Regulations, 2013"},
            {"id": "E", "text": "Does this as he is not restricted to earn revenue from advertisements"}
        ],
        "correctOption": "D",
        "explanation": "According to the Web Aggregators Regulations (2013), a web aggregator shall not Display any information pertaining to products or services of other financial institutions / FMCG or any product or service in the website. They also cannot display advertising of any sort, either pertaining to any product or service including insurance product or service, other financial products or service / or any other product or service in the Web Aggregators Website."
    },
    {
        "questionId": "Q.14.",
        "question": "Identify which of the following statements is CORRECT in relation to claims on baggage and valuables in transit?",
        "options": [
            {"id": "A", "text": "Can be reimbursed only in kind"},
            {"id": "B", "text": "Payment is always made in foreign exchange"},
            {"id": "C", "text": "Payment can be made in foreign exchange only if specific conditions are met"},
            {"id": "D", "text": "Payment is never made in foreign exchange"},
            {"id": "E", "text": "Valuables in transit and baggage are not covered under insurance"}
        ],
        "correctOption": "C",
        "explanation": "Claims on such policies may be paid only in rupees in India except where the policy holder is a person normally resident outside India and premiums against the policy had been collected either in foreign currency or in rupees derived by surrender of foreign currency. Remittances of claims in foreign currencies in other cases will require prior approval of Reserve Bank."
    },
    {
        "questionId": "Q.15.",
        "question": "Identify from the following, the combi- products that can have a tie-up.",
        "options": [
            {"id": "A", "text": "One Life and One General or Health Insurer"},
            {"id": "B", "text": "One Life and Multiple Health Insurers"},
            {"id": "C", "text": "One Life and Multiple General Insurers"},
            {"id": "D", "text": "One Life, One General and One Health Insurer"},
            {"id": "E", "text": "One General or Health Insurer and Multiple Life Insurers"}
        ],
        "correctOption": "D",
        "explanation": "The Insurance Regulatory and Development Authority of India (IRDAI) allows life insurance companies to launch combi products under the 'use and file' guidelines. For a combi-product, it is possible to have a single life insurer, single health insurer, and single general insurer involved. This ensures that the different forms of coverage (life, health, and general) are integrated and managed under the same package."
    },
    {
        "questionId": "Q.16.",
        "question": "is not considered to be a doubtful transaction.",
        "options": [
            {"id": "A", "text": "Assignments handed out without a valid consideration to unknown parties"},
            {"id": "B", "text": "Purchasing an insurance policy in third party's name"},
            {"id": "C", "text": "Transactions carried out in cash to the extent of Rs.30 lakhs"},
            {"id": "D", "text": "Repeated requests for address change"},
            {"id": "E", "text": "Payment made in cash while purchasing a costly garment"}
        ],
        "correctOption": "E",
        "explanation": "While paying in cash for an expensive garment might be unusual, it isn't necessarily suspicious or indicative of fraud. Many people pay cash for expensive goods, and there is nothing suspicious about it. The other options involve behaviors that might indicate money laundering, fraud, or attempts to hide or move assets. Therefore, option e is the only one that is not inherently suspicious based on the information provided."
    },
    {
        "questionId": "Q.17.",
        "question": "Priyesh is a policyholder of Maxwell Insurance company. After some period, he thinks Brighton Insurance Company is giving him better terms and he transfers the policy to Brighton. However he does not lose out on the credits gained during the policy period with Maxwell, even after transferring the policy. Which of the following term defines this case?",
        "options": [
            {"id": "A", "text": "Disloyalty"},
            {"id": "B", "text": "Slyness"},
            {"id": "C", "text": "Being 'pennywise but pound foolish'"},
            {"id": "D", "text": "Astuteness"},
            {"id": "E", "text": "Portability"}
        ],
        "correctOption": "E",
        "explanation": "Portability of Health Insurance states: When you change your health insurance policy from one insurance company to another, you don't have to lose the benefits you have accumulated. Now IRDA protects you by giving you the right to port your policy to any other insurer of your choice. It has laid down that your new insurer 'shall allow for credit gained by the insured for pre-existing condition(s) in terms of waiting period'. This applies not only when one move from one insurer to another but also from one plan to another with the same insurer."
    },
    {
        "questionId": "Q.18.",
        "question": "Unit Linked Insurance Plans (ULIPs) with reference to premium payment during paying terms.",
        "options": [
            {"id": "A", "text": "Lapse if premium is not paid and all earlier premiums paid are forfeited"},
            {"id": "B", "text": "Offer flexibility"},
            {"id": "C", "text": "Can be rolled over"},
            {"id": "D", "text": "Cannot be changed"},
            {"id": "E", "text": "Can be paid by agent on client's behalf"}
        ],
        "correctOption": "B",
        "explanation": "ULIPs usually offer the flexibility to select the number of premium-paying years. This allows you to choose the payment term duration according to your convenience and preference."
    },
    {
        "questionId": "Q.19.",
        "question": "It is to mention the words 'Insurance Web Aggregator' in the Aggregator Company's name.",
        "options": [
            {"id": "A", "text": "Mandatory"},
            {"id": "B", "text": "Unnecessary"},
            {"id": "C", "text": "Obsolete"},
            {"id": "D", "text": "Not required"},
            {"id": "E", "text": "Voluntary"}
        ],
        "correctOption": "A",
        "explanation": "It is mandatory to include the words 'Insurance Web Aggregator' in the name of the Aggregator Company. This requirement is in place to clearly identify the nature of the business conducted by the company, ensuring transparency and compliance with regulatory standards."
    },
    {
        "questionId": "Q.20.",
        "question": "Which of the following documents is suitable to convince insurers that premium payable in foreign currency has actually been received by foreign exchange remittance?",
        "options": [
            {"id": "A", "text": "Policy holder's declaration"},
            {"id": "B", "text": "Bank encashment certificate"},
            {"id": "C", "text": "Statement given orally by policy holder's spouse"},
            {"id": "D", "text": "Agent's confirmation"},
            {"id": "E", "text": "Photographs taken of foreign currency notes"}
        ],
        "correctOption": "B",
        "explanation": "Where Insurers have been permitted to issue policies expressed in foreign currency against premium payable in foreign currency, they should insist on submission of suitable document to satisfy themselves that the premium has been received by foreign exchange remittance through banking channels or in rupees derived by sale of foreign exchange to an authorised dealer in foreign exchange or an authorised money-changer. Such a document is called a Bank encashment certificate."
    },
    {
        "questionId": "Q.21.",
        "question": "Which process allows the company to manage its balance sheet to enable use of alternative interest rate and liquidity scenarios?",
        "options": [
            {"id": "A", "text": "Risk"},
            {"id": "B", "text": "Costs"},
            {"id": "C", "text": "Asset- liability"},
            {"id": "D", "text": "Health"},
            {"id": "E", "text": "Premium"}
        ],
        "correctOption": "C",
        "explanation": "Asset-liability management basically refers to the process, by which an institution manages its balance sheet, in order to allow for alternative interest rate and liquidity scenarios. Banks and other financial institutions provide services, which expose them to various kinds of risks like credit risk, interest risk, and liquidity risk. Asset liability management is an approach that provides institutions with protection that makes such risks acceptable."
    },
    {
        "questionId": "Q.22.",
        "question": "Paresh, an insurer, acquires an asset in January 2013 on instalment basis. The final instalment is payable in April 2015 and his accounting books have financial year ending March 31st. During which of the following financial years the cost of acquisition will be entered in his books of accounts?",
        "options": [
            {"id": "A", "text": "2012-13"},
            {"id": "B", "text": "2014-15"},
            {"id": "C", "text": "2013-14"},
            {"id": "D", "text": "Only after payment of final instalment"},
            {"id": "E", "text": "2012-13, 2013-14 and 2014-15 in proportion"}
        ],
        "correctOption": "E",
        "explanation": "Acquisition costs are to be placed in the period in which they are incurred. When making an instalment purchase, the acquisition costs are included proportionately every year until the final instalment is paid. This is because the instalment method recognizes a proportionate amount of profit upon the receipt of each instalment."
    },
    {
        "questionId": "Q.23.",
        "question": "Arnav purchased a ULIP policy with annual premium of Rs.2 lac and Life cover of Rs.20 lacs. The life cover and other charges in the first year were 25% of premium and remaining 75% amount was invested in units at an offer price of Rs.30. The NAV after a year was Rs.35. Identify the correct option from the following about Arnav's Gain or Loss after one year.",
        "options": [
            {"id": "A", "text": "Arnav has lost Rs.5000"},
            {"id": "B", "text": "Arnav has lost Rs.25000"},
            {"id": "C", "text": "Arnav has gained Rs.10000"},
            {"id": "D", "text": "Arnav has gained Rs.25000"},
            {"id": "E", "text": "Arnav has gained Rs.5000"}
        ],
        "correctOption": "D",
        "explanation": "Unit Linked Insurance Plans (ULIPs) are market-linked insurance plans. The insurance company, after deducting the charges for life cover and a few other charges, invests the remaining amount of the premium in a fund chosen by the policyholder. The policyholder's investment in the fund is denoted in the form of units and is represented by the value that it attains, called Net Asset Value (NAV). The policy value at any time varies according to the value of the underlying assets at that time. Let's calculate Arnav's gain or loss based on the details given in the question: Annual Premium: Rs. 2,00,000. Charges in the first year: 25% of premium = 0.25 * 2,00,000 = Rs. 50,000. Amount invested in units: 75% of the premium = 0.75 * 2,00,000 = Rs. 1,50,000. Units purchased: Offer price = Rs. 30. Units = Rs. 1,50,000 / Rs. 30 = 5,000 units. NAV after one year: Rs. 35. Value of units after one year: 5,000 units x Rs. 35 = Rs. 1,75,000. Net Gain/Loss: Total investment after charges = Rs. 1,50,000 (amount invested). Value after one year = Rs. 1,75,000. Gain = Rs. 1,75,000 - Rs. 1,50,000 = Rs. 25,000."
    },
    {
        "questionId": "Q.24.",
        "question": "Define the term reinsurance broker.",
        "options": [
            {"id": "A", "text": "He is an insurance broker who, against a remuneration, arranges reinsurance with insurance and reinsurance companies for direct insurers"},
            {"id": "B", "text": "He is a person, licensed by the authority to act as such, against a remuneration, carrying out the functions as specifically stated under Regulation 3, either in the field of Life insurance or General insurance or both on behalf of the clients"},
            {"id": "C", "text": "He is an insurance agent, licensed to act as an insurance agent for a Life Insurer, a General Insurer and Health Insurer"},
            {"id": "D", "text": "He is an insurance broker, licensed temporarily by the authority to act as such, against a remuneration, arranges insurance with insurance companies and/ or reinsurance for its clients"},
            {"id": "E", "text": "He is a corporate agent who, acts as an insurance agent for a Life Insurer, a General Insurer and Health Insurer"}
        ],
        "correctOption": "A",
        "explanation": "Reinsurance Broker: An insurance broker who, for remuneration, arranges reinsurance for direct insurers with insurance and reinsurance companies."
    },
    {
        "questionId": "Q.25.",
        "question": "The airborne activity that is known to have the greatest risk of lack of directional control is",
        "options": [
            {"id": "A", "text": "Parachuting"},
            {"id": "B", "text": "Sky diving"},
            {"id": "C", "text": "Hang Gliding"},
            {"id": "D", "text": "Ballooning"},
            {"id": "E", "text": "Micro Light Flying"}
        ],
        "correctOption": "D",
        "explanation": "There is some additional mortality risk associated with ballooning; the risk arises as there is virtually no directional control and because of the hazard of hitting obstacles such as electricity cables and pylons etc."
    }
],
    "ic11Mock7":[
    {
        "questionId": "Q1",
        "question": "Which of the following is not considered by XYZ Health and Allied Insurance Company Ltd.'s underwriter while calculating risk part of proposed insurance.",
        "options": [
            {
                "id": "A",
                "text": "Age"
            },
            {
                "id": "B",
                "text": "Lifestyle"
            },
            {
                "id": "C",
                "text": "Family history"
            },
            {
                "id": "D",
                "text": "Quality of resident"
            },
            {
                "id": "E",
                "text": "History of illness"
            }
        ],
        "correctOption": "D",
        "explanation": "A health insurer's underwriter may consider the following aspects in a proposal before deciding on the risk: age, family history, lifestyle, and current health."
    },
    {
        "questionId": "Q2",
        "question": "Identify the insurance policy required by Mr. Shah who has recently purchased a fishing vessel which he plans to lease out.",
        "options": [
            {
                "id": "A",
                "text": "Floating policy"
            },
            {
                "id": "B",
                "text": "Marine cargo policy"
            },
            {
                "id": "C",
                "text": "Long term policy"
            },
            {
                "id": "D",
                "text": "Motor insurance policy"
            },
            {
                "id": "E",
                "text": "Marine hull insurance policy"
            }
        ],
        "correctOption": "E",
        "explanation": "Marine Hull insurance covers the insurance of ocean-going ships and other vessels such as fishing vessels, sailing vessels, inland vessels, etc., which are known as 'Sundry Vessels'."
    },
    {
        "questionId": "Q3",
        "question": "Which of the following is correct option in context to a Hire Purchase agreement?",
        "options": [
            {
                "id": "A",
                "text": "Policies have to be issued in the name of the registered owner only"
            },
            {
                "id": "B",
                "text": "Policies must be issued in the name of the hired only"
            },
            {
                "id": "C",
                "text": "Policies must be issued in the name of the hirer only"
            },
            {
                "id": "D",
                "text": "Policies must be issued in the name of the hirer and the owner's interest protected by attaching to the policy the prescribed endorsement"
            },
            {
                "id": "E",
                "text": "Policies must be issued in the name of the hirer and the owner's interest may not be protected by attaching to the policy"
            }
        ],
        "correctOption": "D",
        "explanation": "In the case of hire purchase agreements, policies must be issued in the name of the hirer and the owner's interest protected by attaching to the policy the prescribed endorsement."
    },
    {
        "questionId": "Q4",
        "question": "Identify the benefits which are not covered for an industrial employee under the Employees State Insurance Policy.",
        "options": [
            {
                "id": "A",
                "text": "Maternity Benefit"
            },
            {
                "id": "B",
                "text": "Property Damage"
            },
            {
                "id": "C",
                "text": "Medical Treatment"
            },
            {
                "id": "D",
                "text": "Sickness Benefit"
            },
            {
                "id": "E",
                "text": "Disablement Benefit"
            }
        ],
        "correctOption": "B",
        "explanation": "Under the Employees State Insurance Act, the fund maintained with contributions from employees, employers, and the government covers expenses for Sickness benefit, maternity benefit, disablement benefit, dependence benefit (death), and medical treatment, as well as the establishment and maintenance of hospitals. Property damage is not listed as a covered benefit."
    },
    {
        "questionId": "Q5",
        "question": "______ insurance policy is concerned with damages to turnkey projects during constructional phase.",
        "options": [
            {
                "id": "A",
                "text": "Personal Accident"
            },
            {
                "id": "B",
                "text": "Marine"
            },
            {
                "id": "C",
                "text": "Cargo"
            },
            {
                "id": "D",
                "text": "Motor Vehicle"
            },
            {
                "id": "E",
                "text": "Engineering"
            }
        ],
        "correctOption": "E",
        "explanation": "Engineering Insurance provides different policies for insurance needs during the construction and operational phase of a project, including turnkey projects."
    },
    {
        "questionId": "Q6",
        "question": "______ covers the wages in direct transit from the bank to the insured premises.",
        "options": [
            {
                "id": "A",
                "text": "Money Insurance Policy"
            },
            {
                "id": "B",
                "text": "Burglary Insurance Policy"
            },
            {
                "id": "C",
                "text": "Baggage Insurance Policy"
            },
            {
                "id": "D",
                "text": "All Risk Insurance Policy"
            },
            {
                "id": "E",
                "text": "Fidelity Guarantees Insurance Policy"
            }
        ],
        "correctOption": "A",
        "explanation": "The property covered under a Money Insurance Policy includes wages in direct transit from the bank to the insured premises."
    },
    {
        "questionId": "Q7",
        "question": "Which type of information will not be required, if Mr. Batra wants an insurance policy for his new motor vehicle?",
        "options": [
            {
                "id": "A",
                "text": "Turnover of business"
            },
            {
                "id": "B",
                "text": "Purpose of Vehicle"
            },
            {
                "id": "C",
                "text": "Where the vehicle parked"
            },
            {
                "id": "D",
                "text": "Security features of vehicle"
            },
            {
                "id": "E",
                "text": "Vehicle Identification number"
            }
        ],
        "correctOption": "A",
        "explanation": "In motor insurance, the insurer requires details of the vehicle and the driver to understand the risk. Turnover of business is required for Liability insurance, not Motor insurance."
    },
    {
        "questionId": "Q8",
        "question": "______ determines the amount of premium charged to the insured.",
        "options": [
            {
                "id": "A",
                "text": "Share broker"
            },
            {
                "id": "B",
                "text": "Banker"
            },
            {
                "id": "C",
                "text": "Insurance Agent"
            },
            {
                "id": "D",
                "text": "Insurance broker"
            },
            {
                "id": "E",
                "text": "Insurance underwriters"
            }
        ],
        "correctOption": "E",
        "explanation": "Underwriters study the pattern of reserves development to understand the true cost of claims for whole classes of business to determine the appropriate pure risk premiums going forward."
    },
    {
        "questionId": "Q9",
        "question": "Give an example of insurance of property.",
        "options": [
            {
                "id": "A",
                "text": "Fidelity guarantee insurance"
            },
            {
                "id": "B",
                "text": "Products liability insurance"
            },
            {
                "id": "C",
                "text": "Cattle Insurance"
            },
            {
                "id": "D",
                "text": "Public (third party) liability insurance"
            },
            {
                "id": "E",
                "text": "Personal accident and sickness insurance"
            }
        ],
        "correctOption": "C",
        "explanation": "Fire insurance, marine insurance, burglary insurance, engineering insurance, motor vehicle insurance, aviation hull insurance, crop insurance, and cattle insurance are important classes of insurance falling under the classification of Insurances of property."
    },
    {
        "questionId": "Q10",
        "question": "The insurer is not liable for any loss after the expiry of ______ from the date of loss unless the claim is the subject of pending action or arbitration.",
        "options": [
            {
                "id": "A",
                "text": "12 months"
            },
            {
                "id": "B",
                "text": "3 months"
            },
            {
                "id": "C",
                "text": "1 months"
            },
            {
                "id": "D",
                "text": "6 months"
            },
            {
                "id": "E",
                "text": "9 months"
            }
        ],
        "correctOption": "A",
        "explanation": "The insurer is not liable for any loss after the expiry of 12 months from the date of loss unless the claim is the subject of pending action or arbitration."
    },
    {
        "questionId": "Q11",
        "question": "M/s Tripexpert is a rental car service in India. Mr. Prasad rented a Honda City from them for his trip to Mahabaleshwar. Suggest about who will bear the motor vehicle insurance cost.",
        "options": [
            {
                "id": "A",
                "text": "Honda"
            },
            {
                "id": "B",
                "text": "M/s Tripexpert"
            },
            {
                "id": "C",
                "text": "Both Mr. Prasad & M/s Tripexpert"
            },
            {
                "id": "D",
                "text": "Mr. Prasad"
            },
            {
                "id": "E",
                "text": "Neither Mr. Prasad nor M/s Tripexpert"
            }
        ],
        "correctOption": "B",
        "explanation": "Having a car insurance policy is a statutory requirement by law. If it is a rental car, the rental company would have already insured the car."
    },
    {
        "questionId": "Q12",
        "question": "An insurance company which is planning to introduce new insurance products, expect premiums of almost Rs. 700 crores in a year. As per IRDAI guidelines, what is their minimum required investment into central government securities?",
        "options": [
            {
                "id": "A",
                "text": "Rs. 80 crores"
            },
            {
                "id": "B",
                "text": "Rs. 140 crores"
            },
            {
                "id": "C",
                "text": "Rs. 200 crores"
            },
            {
                "id": "D",
                "text": "Rs. 300 crores"
            },
            {
                "id": "E",
                "text": "Rs. 700 crores"
            }
        ],
        "correctOption": "B",
        "explanation": "As per the IRDAI (Investment) Regulations, 2000, the minimum required investment into Central Government Securities is not less than 20%. Therefore, 20% of Rs. 700 crores is Rs. 140 crores."
    },
    {
        "questionId": "Q13",
        "question": "Which terms lay down the basic norms to be followed by the buyer and seller and their responsibilities and duties?",
        "options": [
            {
                "id": "A",
                "text": "INCO Terms"
            },
            {
                "id": "B",
                "text": "Maritime terms."
            },
            {
                "id": "C",
                "text": "International Register of Shipping"
            },
            {
                "id": "D",
                "text": "Institute Cargo Clauses"
            },
            {
                "id": "E",
                "text": "Inland Transit Clauses"
            }
        ],
        "correctOption": "A",
        "explanation": "Incoterms are the selling terms that the buyer and seller of goods agree to during international transactions. They clearly state which tasks, costs and risks are associated with the buyer and the seller."
    },
    {
        "questionId": "Q14",
        "question": "Identify the hazards which come from the features of the property itself, its location purpose, etc.",
        "options": [
            {
                "id": "A",
                "text": "Moral Hazards"
            },
            {
                "id": "B",
                "text": "Physical Hazards"
            },
            {
                "id": "C",
                "text": "Financial hazards"
            },
            {
                "id": "D",
                "text": "Employee Hazards"
            },
            {
                "id": "E",
                "text": "Occupational hazards"
            }
        ],
        "correctOption": "B",
        "explanation": "Physical hazards are the tangible factors that arise out of the nature of the risk itself. They come from the features of the property/risk itself, its location, purpose/activity, etc."
    },
    {
        "questionId": "Q15",
        "question": "What is the full form of IRDAI?",
        "options": [
            {
                "id": "A",
                "text": "Insurance Reform & Development Authority of India"
            },
            {
                "id": "B",
                "text": "Insurance Regulatory & Desired Authority of India"
            },
            {
                "id": "C",
                "text": "Insurance Research & Development Authority of India"
            },
            {
                "id": "D",
                "text": "Insurance Regulatory & Development Authority of India"
            },
            {
                "id": "E",
                "text": "Insurance Regulatory & Development Association of India"
            }
        ],
        "correctOption": "D",
        "explanation": "IRDAI stands for Insurance Regulatory & Development Authority of India."
    },
    {
        "questionId": "Q16",
        "question": "Which of the following is approved as an Indian reinsurer with the aim of optimising retention of reinsurance business within the country and developing adequate reinsurance capacity?",
        "options": [
            {
                "id": "A",
                "text": "The oriental Insurance Co. Ltd."
            },
            {
                "id": "B",
                "text": "National Insurance Co. Ltd."
            },
            {
                "id": "C",
                "text": "United Insurance Co. Ltd"
            },
            {
                "id": "D",
                "text": "The New India Assurance Co. Ltd."
            },
            {
                "id": "E",
                "text": "General Insurance Corporation of India"
            }
        ],
        "correctOption": "E",
        "explanation": "General Insurance Corporation of India (GIC Re) was approved as an Indian reinsurer in 2000 with the aim of optimising retention of reinsurance business within the country and developing adequate reinsurance capacity."
    },
    {
        "questionId": "Q17",
        "question": "Identify the incorrect statement with respect to the floater policy.",
        "options": [
            {
                "id": "A",
                "text": "Unspecified locations are allowed"
            },
            {
                "id": "B",
                "text": "Unspecified locations are not allowed"
            },
            {
                "id": "C",
                "text": "The insured may have stocks in two or more godowns"
            },
            {
                "id": "D",
                "text": "These policies cover stocks at various locations under one sum insured."
            },
            {
                "id": "E",
                "text": "The insured is able to declare for insurance the total value of goods in all godowns"
            }
        ],
        "correctOption": "A",
        "explanation": "Floater policies cover stocks at various specific locations under one sum insured. Unspecified locations are not allowed."
    },
    {
        "questionId": "Q18",
        "question": "______ line of business is concerned with piracy attack.",
        "options": [
            {
                "id": "A",
                "text": "Marine"
            },
            {
                "id": "B",
                "text": "Fire"
            },
            {
                "id": "C",
                "text": "Motor"
            },
            {
                "id": "D",
                "text": "Engineering"
            },
            {
                "id": "E",
                "text": "Business Interruption"
            }
        ],
        "correctOption": "A",
        "explanation": "Piracy is an act of robbery or criminal violence by ship or boat-borne attackers upon another ship or a coastal area, a risk typically associated with the marine line of business."
    },
    {
        "questionId": "Q19",
        "question": "What is the per person amount of relief payable for a fatal accident, according to The Public Liability Insurance Act of 1991?",
        "options": [
            {
                "id": "A",
                "text": "Rs. 1,00,000/-"
            },
            {
                "id": "B",
                "text": "Rs. 150,000/-"
            },
            {
                "id": "C",
                "text": "Rs. 25,000/-"
            },
            {
                "id": "D",
                "text": "Rs. 75,000/-"
            },
            {
                "id": "E",
                "text": "Rs. 50,000/-"
            }
        ],
        "correctOption": "C",
        "explanation": "The Public Liability Insurance Act, 1991, prescribes under Section 3 that the amount of relief payable for a Fatal Accident is Rs. 25,000/- per person."
    },
    {
        "questionId": "Q20",
        "question": "Identify the legislations which does not provide for Statutory Liability covered by an insurance policy.",
        "options": [
            {
                "id": "A",
                "text": "Indian Stamps Act"
            },
            {
                "id": "B",
                "text": "Fatal Accident Act"
            },
            {
                "id": "C",
                "text": "Motor Vehicle Act"
            },
            {
                "id": "D",
                "text": "Employees Compensation Act"
            },
            {
                "id": "E",
                "text": "Public Liability Insurance Act"
            }
        ],
        "correctOption": "A",
        "explanation": "The Indian Stamp Act of 1899 is for charging stamp duty on instruments recording transactions. The other acts mentioned provide for indemnity to the insured owner against statutory liability arising out of accidents."
    },
    {
        "questionId": "Q21",
        "question": "Identify from below, the item which is not covered under the Deterioration of stock policy.",
        "options": [
            {
                "id": "A",
                "text": "Eggs"
            },
            {
                "id": "B",
                "text": "Fruits"
            },
            {
                "id": "C",
                "text": "Cheese"
            },
            {
                "id": "D",
                "text": "Sea foods"
            },
            {
                "id": "E",
                "text": "Dairy products"
            }
        ],
        "correctOption": "A",
        "explanation": "There are two different forms of this policy; one in respect of stocks of fish, prawns, frog legs and other types of sea foods, fruits, cheese, provisions and other Dairy products, etc., the other form of policy is exclusively meant for the contents of Potato Cold Storage. Eggs are not mentioned as covered."
    },
    {
        "questionId": "Q22",
        "question": "______ is recognised as income over the contract period in the insurer's book of accounts.",
        "options": [
            {
                "id": "A",
                "text": "Claims"
            },
            {
                "id": "B",
                "text": "Premium"
            },
            {
                "id": "C",
                "text": "Bonuses"
            },
            {
                "id": "D",
                "text": "Loans"
            },
            {
                "id": "E",
                "text": "Broker's commission"
            }
        ],
        "correctOption": "B",
        "explanation": "Premium is to be recognised as income over the contract period or the period of risk."
    },
    {
        "questionId": "Q23",
        "question": "Identify the correct option from the following with respect to Loss or damage to the vehicle and Third Party Liability (TPL).",
        "options": [
            {
                "id": "A",
                "text": "Losses in a motor vehicle policy"
            },
            {
                "id": "B",
                "text": "Damages in a motor vehicle policy"
            },
            {
                "id": "C",
                "text": "Interest in a motor vehicle policy"
            },
            {
                "id": "D",
                "text": "Repairs in a motor vehicle policy"
            },
            {
                "id": "E",
                "text": "Premium on motor vehicle policy"
            }
        ],
        "correctOption": "A",
        "explanation": "Two types of losses arise in respect of motor vehicles of all categories: Loss of or damage to the vehicle (Own Damage or OD) and Third Party Liability (TPL)."
    },
    {
        "questionId": "Q24",
        "question": "Which of the following is earmarked for eventual claim payment?",
        "options": [
            {
                "id": "A",
                "text": "Equity Reserve"
            },
            {
                "id": "B",
                "text": "IBNR Reserve"
            },
            {
                "id": "C",
                "text": "Claims Reserve"
            },
            {
                "id": "D",
                "text": "Premium Reserve"
            },
            {
                "id": "E",
                "text": "Insurance Reserve"
            }
        ],
        "correctOption": "C",
        "explanation": "A claims reserve is a reserve of money set aside by an insurance company to pay policyholders who have filed or are expected to file legitimate claims on their policies."
    },
    {
        "questionId": "Q25",
        "question": "The risk which is not covered under the Marine insurance is",
        "options": [
            {
                "id": "A",
                "text": "Loss of ocean going steamer against risk of earth quake"
            },
            {
                "id": "B",
                "text": "Loss of property against risk of delayed delivery"
            },
            {
                "id": "C",
                "text": "Loss of motor boat against risk of fire"
            },
            {
                "id": "D",
                "text": "Loss of goods in transit in the Ganga River"
            },
            {
                "id": "E",
                "text": "Loss of fishing vessel against risk of storm"
            }
        ],
        "correctOption": "B",
        "explanation": "Marine insurance, which comprises Cargo and Hull insurance, covers loss or damage to the vessel or cargo. It does not cover the risk of delayed delivery."
    },
    {
        "questionId": "Q26",
        "question": "______ is critical for long term underwriting profit.",
        "options": [
            {
                "id": "A",
                "text": "Commission rate"
            },
            {
                "id": "B",
                "text": "Analytical"
            },
            {
                "id": "C",
                "text": "Hedging rate"
            },
            {
                "id": "D",
                "text": "Financing rate"
            },
            {
                "id": "E",
                "text": "Both technical rate and book rate"
            }
        ],
        "correctOption": "E",
        "explanation": "Both technical rate and book rate are critical for long-term underwriting profit."
    },
    {
        "questionId": "Q27",
        "question": "IBNER means",
        "options": [
            {
                "id": "A",
                "text": "Incurred But Not Early Reported"
            },
            {
                "id": "B",
                "text": "Incurred But Not Enough Reported"
            },
            {
                "id": "C",
                "text": "Incurred But Not Exactly Reported"
            },
            {
                "id": "D",
                "text": "Incurred But Not Equally Reported"
            },
            {
                "id": "E",
                "text": "Incurred But Not Everything Reported"
            }
        ],
        "correctOption": "B",
        "explanation": "IBNER means Incurred But Not Enough Reported. This is a term used for accounting estimates for claims."
    },
    {
        "questionId": "Q28",
        "question": "______ is not considered as an example of express conditions.",
        "options": [
            {
                "id": "A",
                "text": "Reasonable care"
            },
            {
                "id": "B",
                "text": "Alteration to the risk"
            },
            {
                "id": "C",
                "text": "Contribution"
            },
            {
                "id": "D",
                "text": "Claim procedure"
            },
            {
                "id": "E",
                "text": "Insurable interest"
            }
        ],
        "correctOption": "E",
        "explanation": "Express Conditions are specifically stated and include terms, alteration to the risk, claims procedure, fraud, reasonable care, contribution, cancellation, and estimates/declarations. Insurable interest is not an example of an express condition."
    },
    {
        "questionId": "Q29",
        "question": "Select the correct option and fill the blanks in below statement 'The ______ who drafts the policy is primarily responsible for any ambiguities and they are interpreted against him.'",
        "options": [
            {
                "id": "A",
                "text": "Agent"
            },
            {
                "id": "B",
                "text": "IRDAI"
            },
            {
                "id": "C",
                "text": "Insurer"
            },
            {
                "id": "D",
                "text": "Insured"
            },
            {
                "id": "E",
                "text": "Actuary"
            }
        ],
        "correctOption": "C",
        "explanation": "The 'Contra proferentum' rule states that where a contractual language is capable of two alternative interpretations, it will be construed against the insurer who drafted the contract and in favor of the insured."
    },
    {
        "questionId": "Q30",
        "question": "Read the below definition carefully and identify the term 'other party' in this. 'A contract of insurance is an agreement whereby one party, in return for a consideration, undertakes to pay to other party a sum of money, upon the happening of certain specified events.'",
        "options": [
            {
                "id": "A",
                "text": "The insurer"
            },
            {
                "id": "B",
                "text": "The insured"
            },
            {
                "id": "C",
                "text": "The surveyor"
            },
            {
                "id": "D",
                "text": "The debtor"
            },
            {
                "id": "E",
                "text": "The creditor"
            }
        ],
        "correctOption": "B",
        "explanation": "In a contract of insurance, the 'one party' is the insurer and the 'other party' is the insured."
    },
    {
        "questionId": "Q31",
        "question": "______ is not an element of a contract.",
        "options": [
            {
                "id": "A",
                "text": "Legality"
            },
            {
                "id": "B",
                "text": "Offer"
            },
            {
                "id": "C",
                "text": "Consideration"
            },
            {
                "id": "D",
                "text": "Insurability"
            },
            {
                "id": "E",
                "text": "Acceptance"
            }
        ],
        "correctOption": "D",
        "explanation": "The elements of a contract include: offer and acceptance, consideration, legality, agreement, contractual capacity, and an intention to create a legal relationship. Insurability is not listed as a standard element of a contract."
    },
    {
        "questionId": "Q32",
        "question": "Identify from the following, the roles which are not performed by the Loss Adjuster.",
        "options": [
            {
                "id": "A",
                "text": "Claim Settlement & payment"
            },
            {
                "id": "B",
                "text": "Damage reclamation services"
            },
            {
                "id": "C",
                "text": "Checking the presenting claim accuracy"
            },
            {
                "id": "D",
                "text": "Checking on whether any other aspects may affect an insurance company's liability"
            },
            {
                "id": "E",
                "text": "Checking whether the insurance company is liable under the insurance policy"
            }
        ],
        "correctOption": "A",
        "explanation": "The role of the loss adjuster includes checking liability, checking for other affecting aspects, providing damage reclamation services, reporting to insurers, and checking claim accuracy. They do not perform the final claim settlement and payment."
    },
    {
        "questionId": "Q33",
        "question": "Mr. Nihar wants to buy the Contractor's All risk (C.A.R) insurance policy for their new project. Identify the expense (s) that may be optional as insurance project cost under the C.A.R. insurance policy. Material cost - INR 20 crores Labour cost - 30% of Material cost Lease for equipments - INR 5 crores Freight - INR 0.80 crores Tender deposit (refundable) - INR 0.2 crore Government duties & taxes - INR 0.9 crores",
        "options": [
            {
                "id": "A",
                "text": "Labour cost"
            },
            {
                "id": "B",
                "text": "Material cost"
            },
            {
                "id": "C",
                "text": "Freight charges"
            },
            {
                "id": "D",
                "text": "Tender deposits (refundable)"
            },
            {
                "id": "E",
                "text": "Government duties & taxes"
            }
        ],
        "correctOption": "D",
        "explanation": "The sum insured under a Contractors All Risks (C.A.R.) Policy is the estimated completely erected value of the contract works, including materials, wages, construction costs, freight, customs duties, and items supplied by the principal. Tender deposits (refundable) may be optional."
    },
    {
        "questionId": "Q34",
        "question": "Contribution in claim closure process means",
        "options": [
            {
                "id": "A",
                "text": "The sharing of a claim between three insurers"
            },
            {
                "id": "B",
                "text": "The sharing of a claim between two insurers"
            },
            {
                "id": "C",
                "text": "The sharing of a claim between two co-insurers"
            },
            {
                "id": "D",
                "text": "The sharing of a claim between group of insurers"
            },
            {
                "id": "E",
                "text": "The sharing of a claim between insured and insurers"
            }
        ],
        "correctOption": "D",
        "explanation": "In the claim closure process, contribution means that when the same property is insured by more than one insurer under different policies, the loss will be shared proportionately among the insurers concerned."
    },
    {
        "questionId": "Q35",
        "question": "Explain the prerequisites to get fixed relief for an accident victim in a case of temporary partial disablement under the public liability insurance Act 1991.",
        "options": [
            {
                "id": "A",
                "text": "Victim has been hospitalized a period exceeding 1 days and is above 5 years of age"
            },
            {
                "id": "B",
                "text": "Victim has been hospitalized a period exceeding 3 days and is above 14 years of age"
            },
            {
                "id": "C",
                "text": "Victim has been hospitalized a period exceeding 1 days and is above 14 years of age"
            },
            {
                "id": "D",
                "text": "Victim has been hospitalized a period exceeding 1 days and is above 16 years of age"
            },
            {
                "id": "E",
                "text": "Victim has been hospitalized a period exceeding 3 days and is above 16 years of age"
            }
        ],
        "correctOption": "E",
        "explanation": "For temporary partial disablement, fixed relief is provided if the victim has been hospitalised for a period exceeding 3 days and is above 16 years of age, as per the Public Liability Insurance Act 1991."
    },
    {
        "questionId": "Q36",
        "question": "State the reason as to why the rule of Contra proferentum favours the insured.",
        "options": [
            {
                "id": "A",
                "text": "Insurance deals with uncertainty and therefore any uncertainty should be the burden of the insurer"
            },
            {
                "id": "B",
                "text": "Insurers are generally considered to be financially better placed than the insured."
            },
            {
                "id": "C",
                "text": "The contract was drafted by the insurer and should not be able to benefit from any ambiguity therein."
            },
            {
                "id": "D",
                "text": "Insurance Contract documents contain difficult conditions"
            },
            {
                "id": "E",
                "text": "Insurance is expected to protect policyholders interest and therefore should favour the customer"
            }
        ],
        "correctOption": "C",
        "explanation": "The 'Contra proferentum' rule states that contractual language capable of two interpretations will be construed against the insurer, who drafted it, and in favor of the insured. This is because the insurer should not be able to benefit from any ambiguity in the language they chose."
    },
    {
        "questionId": "Q37",
        "question": "______ is not required to follow the direction & guidelines issued by IRDAI operational matters.",
        "options": [
            {
                "id": "A",
                "text": "Share Broker"
            },
            {
                "id": "B",
                "text": "Insurance Agent"
            },
            {
                "id": "C",
                "text": "Insurer"
            },
            {
                "id": "D",
                "text": "Surveyor"
            },
            {
                "id": "E",
                "text": "Reinsurer"
            }
        ],
        "correctOption": "A",
        "explanation": "IRDAI is the authority to administer the Insurance Act and to regulate, promote, and ensure the orderly growth of the insurance industry. Share brokers are not part of this regulatory framework."
    },
    {
        "questionId": "Q38",
        "question": "______ factors may not be considered by a claim reserve using the Triangulation technique.",
        "options": [
            {
                "id": "A",
                "text": "Inflation rate"
            },
            {
                "id": "B",
                "text": "Rebuilding cost"
            },
            {
                "id": "C",
                "text": "Medical Cost"
            },
            {
                "id": "D",
                "text": "Legal framework"
            },
            {
                "id": "E",
                "text": "Policyholder's expected return"
            }
        ],
        "correctOption": "E",
        "explanation": "The Triangulation or Chain Ladder technique is a mechanical calculation that does not inherently consider factors like inflation rate, rebuilding costs, legal framework, court awards, or medical costs. Policyholder's expected return is also not considered."
    },
    {
        "questionId": "Q39",
        "question": "As per The Motor Vehicles Act, ______ is not included in a certificate of insurance.",
        "options": [
            {
                "id": "A",
                "text": "Date of expiry of insurance"
            },
            {
                "id": "B",
                "text": "Driver's License Number"
            },
            {
                "id": "C",
                "text": "Registration number"
            },
            {
                "id": "D",
                "text": "Name and Address of the Insured"
            },
            {
                "id": "E",
                "text": "Description of the Vehicles Insured"
            }
        ],
        "correctOption": "B",
        "explanation": "A certificate of insurance for motor vehicles includes information such as the registration mark and number, name and address of the insured, and date of expiry of insurance. It does not include the driver's license number."
    },
    {
        "questionId": "Q40",
        "question": "______ is not a prerequisite to get a License for a Surveyor from IRDAI.",
        "options": [
            {
                "id": "A",
                "text": "Age"
            },
            {
                "id": "B",
                "text": "Gender"
            },
            {
                "id": "C",
                "text": "Relevant Insurance Training"
            },
            {
                "id": "D",
                "text": "Relevant Experience"
            },
            {
                "id": "E",
                "text": "Professional Qualification"
            }
        ],
        "correctOption": "B",
        "explanation": "IRDAI requires individuals applying for an Insurance Surveyor and Loss Assessor license to meet specific requirements such as age, professional qualification, relevant experience, and training. Gender is not a prerequisite."
    },
    {
        "questionId": "Q41",
        "question": "Identify from the following the components which does not constitute outgo for an insurance company.",
        "options": [
            {
                "id": "A",
                "text": "Claims"
            },
            {
                "id": "B",
                "text": "Dividend"
            },
            {
                "id": "C",
                "text": "Commission"
            },
            {
                "id": "D",
                "text": "Claims expenses"
            },
            {
                "id": "E",
                "text": "Management expenses"
            }
        ],
        "correctOption": "B",
        "explanation": "Dividends are a distribution of a firm's accumulated earnings and are not considered an expense. They do not appear on an income statement as an outgo."
    },
    {
        "questionId": "Q42",
        "question": "Complete the following statement: 'A breach of warranty will make the policy ______'",
        "options": [
            {
                "id": "A",
                "text": "Illegal"
            },
            {
                "id": "B",
                "text": "Void"
            },
            {
                "id": "C",
                "text": "Voidable"
            },
            {
                "id": "D",
                "text": "Enforceable"
            },
            {
                "id": "E",
                "text": "Acceptance"
            }
        ],
        "correctOption": "C",
        "explanation": "A breach of warranty, which requires an insured to do or not do certain things, will make the policy voidable."
    },
    {
        "questionId": "Q43",
        "question": "Identify the prerequisite to become a direct broker.",
        "options": [
            {
                "id": "A",
                "text": "Minimum age of 21"
            },
            {
                "id": "B",
                "text": "Pass NCFM module"
            },
            {
                "id": "C",
                "text": "Pass AFMI exam"
            },
            {
                "id": "D",
                "text": "Licensed by IRDAI regulation"
            },
            {
                "id": "E",
                "text": "Licensed by National Insurance Academy"
            }
        ],
        "correctOption": "D",
        "explanation": "Direct brokers, reinsurance brokers, or composite brokers all need to be licensed by IRDA as per Broking Regulations."
    },
    {
        "questionId": "Q44",
        "question": "Which of the following policy protects the interests of contractors and principals in respect of civil engineering projects like buildings, bridges, tunnels, etc.?",
        "options": [
            {
                "id": "A",
                "text": "Stock Spoilage Insurance"
            },
            {
                "id": "B",
                "text": "Deterioration of Stock (DOS) Insurance Policy"
            },
            {
                "id": "C",
                "text": "Contractors All Risks (CAR) Policy"
            },
            {
                "id": "D",
                "text": "Contractors Plant & Machinery (CPM) Policy"
            },
            {
                "id": "E",
                "text": "Machinery Loss of Profits (MLOP) Insurance Policy"
            }
        ],
        "correctOption": "C",
        "explanation": "The Contractors All Risks (C.A.R.) Policy is designed to protect the interests of contractors and principals in respect of civil engineering projects, such as buildings, bridges, and tunnels."
    },
    {
        "questionId": "Q45",
        "question": "Identify from the following, the statement which is incorrect regarding an Insurance policy.",
        "options": [
            {
                "id": "A",
                "text": "The written words will be given less weightage than the printed words"
            },
            {
                "id": "B",
                "text": "The policy must be constituted in accordance with the ordinary laws of grammar."
            },
            {
                "id": "C",
                "text": "The written words will be given more weightage than the printed words."
            },
            {
                "id": "D",
                "text": "Most policy wordings are in standardized printed formats for consistency and efficiency"
            },
            {
                "id": "E",
                "text": "The insurance policy sets out the terms and conditions of the contract in a standard printed form"
            }
        ],
        "correctOption": "A",
        "explanation": "The incorrect statement is that written words are given less weight. In fact, the written words will be given more effect than the printed words, as a principle of construction for insurance contracts."
    },
    {
        "questionId": "Q46",
        "question": "Identify the risk management process components which refer to estimating the likely probability of a risk occurrence & its likely severity.",
        "options": [
            {
                "id": "A",
                "text": "Identification"
            },
            {
                "id": "B",
                "text": "Financing"
            },
            {
                "id": "C",
                "text": "Evaluation"
            },
            {
                "id": "D",
                "text": "Transfer"
            },
            {
                "id": "E",
                "text": "Prevention & Control"
            }
        ],
        "correctOption": "C",
        "explanation": "Risk evaluation involves estimating the likely probability of a risk occurrence and its likely severity. This is a key step in the risk management process."
    },
    {
        "questionId": "Q47",
        "question": "Which of the following is not a correct statement with regards to an Incurred But not Reported (IBNR) reserve?",
        "options": [
            {
                "id": "A",
                "text": "It is difficult to quantify the IBNR reserve"
            },
            {
                "id": "B",
                "text": "It is a premium reserve"
            },
            {
                "id": "C",
                "text": "It is a reserve for outstanding claims that have been incurred"
            },
            {
                "id": "D",
                "text": "It protects against the unknown claims"
            },
            {
                "id": "E",
                "text": "This reserve may cover increases on original estimates for open claims"
            }
        ],
        "correctOption": "B",
        "explanation": "IBNR is a reserve for claims that have been incurred but not yet reported. It is a claims reserve, not a premium reserve."
    },
    {
        "questionId": "Q48",
        "question": "Identify the correct option from the following which may not be covered in a professional indemnities policy.",
        "options": [
            {
                "id": "A",
                "text": "Executive Director"
            },
            {
                "id": "B",
                "text": "Architect"
            },
            {
                "id": "C",
                "text": "Doctor"
            },
            {
                "id": "D",
                "text": "Chartered Accountant"
            },
            {
                "id": "E",
                "text": "Lawyer"
            }
        ],
        "correctOption": "A",
        "explanation": "Professional indemnities policies are designed to protect professionals such as doctors, solicitors, chartered accountants, architects, and lawyers against legal liability arising from negligence. An Executive Director is not typically covered under this type of policy."
    },
    {
        "questionId": "Q49",
        "question": "______ is not a promoter of Agriculture Insurance Company.",
        "options": [
            {
                "id": "A",
                "text": "State Bank of India"
            },
            {
                "id": "B",
                "text": "NABARD"
            },
            {
                "id": "C",
                "text": "General Insurance Corporation of India"
            },
            {
                "id": "D",
                "text": "United India Insurance Company"
            },
            {
                "id": "E",
                "text": "The New India Assurance Company"
            }
        ],
        "correctOption": "A",
        "explanation": "The share capital for the Agriculture Insurance Company of India Ltd. is provided by GIC, NABARD, and the four public sector insurers. State Bank of India is not listed as a promoter."
    },
    {
        "questionId": "Q50",
        "question": "What does AOA mean?",
        "options": [
            {
                "id": "A",
                "text": "Any One Accident"
            },
            {
                "id": "B",
                "text": "Any One Occurrence"
            },
            {
                "id": "C",
                "text": "Accident Over Accident"
            },
            {
                "id": "D",
                "text": "Any Occurrence Accident"
            },
            {
                "id": "E",
                "text": "Accident Occurrence Authority"
            }
        ],
        "correctOption": "A",
        "explanation": "AOA stands for Any One Accident. In some insurance policies, the insured selects limits of indemnity for 'any one accident' (AOA) and 'any one year' (AOY)."
    },
    {
        "questionId": "Q51",
        "question": "Which of the following statement is incorrect with regards to the pure premium rating method?",
        "options": [
            {
                "id": "A",
                "text": "It is a method for calculation of book rate"
            },
            {
                "id": "B",
                "text": "It reflects the expected losses"
            },
            {
                "id": "C",
                "text": "It is used to calculate pure premium in case of property or liability insurance protections"
            },
            {
                "id": "D",
                "text": "It is without any loading for the insurance company's expenses, premium taxes, contingencies and profit margins"
            },
            {
                "id": "E",
                "text": "Pure premium = Total amount of losses incurred per year/ no. of units of exposures"
            }
        ],
        "correctOption": "A",
        "explanation": "The pure premium rating method is not a method for calculating the book rate. The pure premium rating method is a calculation of the pure cost of insurance protection, which reflects expected losses without any loading for expenses, taxes, or profit margins. The formula for pure premium is the total amount of losses incurred per year divided by the number of units of exposure."
    },
    {
        "questionId": "Q52",
        "question": "Which among the following is the policy where cover is particularly formed for the old aircrafts, as such aircrafts are generally in poor condition and are insured for low amounts and the premium for which would also be very low?",
        "options": [
            {
                "id": "A",
                "text": "Aircraft hull policy"
            },
            {
                "id": "B",
                "text": "Aviation Hull Total Loss Only"
            },
            {
                "id": "C",
                "text": "Depositors' Foreign Coverage"
            },
            {
                "id": "D",
                "text": "War Risks Insurance"
            },
            {
                "id": "E",
                "text": "Airline General Third Party Liability Insurance"
            }
        ],
        "correctOption": "B",
        "explanation": "The 'Aviation Hull Total Loss Only' cover is specifically devised for older aircraft that are in poor condition, where the proportion of partial losses to total losses is inadequate. This policy covers the total loss of the aircraft for a low premium."
    },
    {
        "questionId": "Q53",
        "question": "The Life Insurance Corporation Act was enacted in the year",
        "options": [
            {
                "id": "A",
                "text": "1960"
            },
            {
                "id": "B",
                "text": "1956"
            },
            {
                "id": "C",
                "text": "1957"
            },
            {
                "id": "D",
                "text": "1955"
            },
            {
                "id": "E",
                "text": "1856"
            }
        ],
        "correctOption": "B",
        "explanation": "The Life Insurance Corporation Act was passed by the Parliament of India on June 19, 1956, leading to the creation of the Life Insurance Corporation of India on September 1, 1956."
    },
    {
        "questionId": "Q54",
        "question": "Identify from the following, the incorrect statement with regards to Endorsement.",
        "options": [
            {
                "id": "A",
                "text": "Endorsement is normally used when the terms of an insurance are to be same"
            },
            {
                "id": "B",
                "text": "With the consent of both parties, the polices may be amended from time to time"
            },
            {
                "id": "C",
                "text": "Endorsement is normally used when the terms of an insurance contract are to be varied"
            },
            {
                "id": "D",
                "text": "The insurer prepares an endorsement for attachment to the policy"
            },
            {
                "id": "E",
                "text": "Endorsement is issued on standard forms or are separately typed or are written on the policy itself"
            }
        ],
        "correctOption": "A",
        "explanation": "Endorsements are normally used when the terms of an insurance contract are to be varied, not when they are to be the same. They are prepared by the insurer and attached to the policy to reflect changes."
    },
    {
        "questionId": "Q55",
        "question": "Name the General Insurance Company which is specialised health insurer in India.",
        "options": [
            {
                "id": "A",
                "text": "Apollo Munich Insurance"
            },
            {
                "id": "B",
                "text": "The New India Assurance Co. Ltd."
            },
            {
                "id": "C",
                "text": "Export Credit Guarantee of India (ECGC)"
            },
            {
                "id": "D",
                "text": "General Insurance Corporation of India"
            },
            {
                "id": "E",
                "text": "Agriculture Insurance Company of India (AIC)"
            }
        ],
        "correctOption": "A",
        "explanation": "Apollo Munich Health Insurance, along with companies like Max Bupa Health Insurance and Star Health and Allied Insurance Company Limited, are specialised health insurers that do only health insurance business."
    },
    {
        "questionId": "Q56",
        "question": "______ provides the legal framework for transaction of cargo insurance.",
        "options": [
            {
                "id": "A",
                "text": "Indian Shipping Act"
            },
            {
                "id": "B",
                "text": "Insurance Act"
            },
            {
                "id": "C",
                "text": "Marine Insurance Act"
            },
            {
                "id": "D",
                "text": "Carriers Act"
            },
            {
                "id": "E",
                "text": "Multimodal Transport Act"
            }
        ],
        "correctOption": "C",
        "explanation": "The Marine Insurance Act, 1963, provides the legal framework for the transaction of marine insurance, which includes both cargo and hull insurance."
    },
    {
        "questionId": "Q57",
        "question": "An application for claim for relief must be made by the affected party within how many years of the occurrence of the accident, according to the Public Liability Insurance Act of 1991.",
        "options": [
            {
                "id": "A",
                "text": "1 year"
            },
            {
                "id": "B",
                "text": "2 years"
            },
            {
                "id": "C",
                "text": "3 years"
            },
            {
                "id": "D",
                "text": "4 years"
            },
            {
                "id": "E",
                "text": "5 years"
            }
        ],
        "correctOption": "E",
        "explanation": "According to the Public Liability Insurance Act of 1991, an application for a claim for relief must be made within 5 years of the accident's occurrence."
    },
    {
        "questionId": "Q58",
        "question": "Identify the incorrect statement from the following with regards to Pedal Cycle Insurance.",
        "options": [
            {
                "id": "A",
                "text": "Theft is covered"
            },
            {
                "id": "B",
                "text": "Burglary is covered"
            },
            {
                "id": "C",
                "text": "Fire is covered"
            },
            {
                "id": "D",
                "text": "Lighting is covered"
            },
            {
                "id": "E",
                "text": "Earthquake is covered"
            }
        ],
        "correctOption": "E",
        "explanation": "The Pedal Cycle Insurance policy covers loss or damage to the cycle by fire, lightning, explosion, burglary, housebreaking, theft and accidental external means. It does not list earthquake as a covered risk."
    },
    {
        "questionId": "Q59",
        "question": "What is the other name for Triangulation technique?",
        "options": [
            {
                "id": "A",
                "text": "Triennial Calculation"
            },
            {
                "id": "B",
                "text": "Steps Formulation"
            },
            {
                "id": "C",
                "text": "Trigonometric Technique"
            },
            {
                "id": "D",
                "text": "Modern Portfolio"
            },
            {
                "id": "E",
                "text": "Chain Ladder Technique"
            }
        ],
        "correctOption": "E",
        "explanation": "The Triangulation technique is also known as the Chain Ladder technique."
    },
    {
        "questionId": "Q60",
        "question": "Identify from the following, the correct option which is used to determine the claim cost under a fire insurance policy for an insurer.",
        "options": [
            {
                "id": "A",
                "text": "Surveyor's cost"
            },
            {
                "id": "B",
                "text": "Agent's commission"
            },
            {
                "id": "C",
                "text": "Distribution cost"
            },
            {
                "id": "D",
                "text": "Actuary's professional fees"
            },
            {
                "id": "E",
                "text": "General administrative expenses"
            }
        ],
        "correctOption": "E",
        "explanation": "General administrative expenses are a component of claims handling cost. Claims handling costs are incurred by the insurer in processing and administration of insurance claims. This does not include the actual claim cost or amount of the claim."
    },
    {
        "questionId": "Q61",
        "question": "Burglary insurance is a major business in which of the following classes of general insurance?",
        "options": [
            {
                "id": "A",
                "text": "Primary"
            },
            {
                "id": "B",
                "text": "Secondary"
            },
            {
                "id": "C",
                "text": "Ordinary"
            },
            {
                "id": "D",
                "text": "Special"
            },
            {
                "id": "E",
                "text": "Miscellaneous"
            }
        ],
        "correctOption": "E",
        "explanation": "Burglary insurance is a major business in the miscellaneous class of general insurance."
    },
    {
        "questionId": "Q62",
        "question": "Which of the following statement is correct?",
        "options": [
            {
                "id": "A",
                "text": "The insurance of motor vehicles against third party liability arising out of the use of motor vehicles in public places is not compulsory"
            },
            {
                "id": "B",
                "text": "The insurance of motor vehicles against own damage is compulsory"
            },
            {
                "id": "C",
                "text": "The insurance of motor vehicles against own damage is compulsory, but the insurance of third party liability arising out of the use of motor vehicles in private places is not compulsory"
            },
            {
                "id": "D",
                "text": "The insurance of motor vehicles against own damage is not compulsory, but the insurance of third party liability arising out of the use of motor vehicles in public places is compulsory"
            },
            {
                "id": "E",
                "text": "The insurance of motor vehicles against own damage and of third party liability arising out of the use of motor vehicles in public places is compulsory"
            }
        ],
        "correctOption": "D",
        "explanation": "The insurance of motor vehicles against own damage is not compulsory, but the insurance of third-party liability arising out of their use in public places is compulsory as per the Motor Vehicles Act."
    },
    {
        "questionId": "Q63",
        "question": "Identify the correct statement from the following with regards to Exposure.",
        "options": [
            {
                "id": "A",
                "text": "It is the measurement of historical risk"
            },
            {
                "id": "B",
                "text": "It is the measurement of frequency of risk"
            },
            {
                "id": "C",
                "text": "It is the measurement of expected premium"
            },
            {
                "id": "D",
                "text": "It is the measurement of how big a risk is"
            },
            {
                "id": "E",
                "text": "It is the measurement of expected claim amount"
            }
        ],
        "correctOption": "D",
        "explanation": "Exposure is the measurement of how big a risk is."
    },
    {
        "questionId": "Q64",
        "question": "What would be the premium charged for Glass & ceramic factories, as per comprehensive general insurance policies.",
        "options": [
            {
                "id": "A",
                "text": "Highest"
            },
            {
                "id": "B",
                "text": "Lowest"
            },
            {
                "id": "C",
                "text": "Average"
            },
            {
                "id": "D",
                "text": "Premium greater than charged for Sugar industries"
            },
            {
                "id": "E",
                "text": "Premium greater than charged for Distilleries"
            }
        ],
        "correctOption": "B",
        "explanation": "Risks are categorised into four groups. Glass & Ceramic factories are in Group I, for which the rates are the lowest."
    },
    {
        "questionId": "Q65",
        "question": "Study the following scenario carefully and identify who will pay for the claims of this accident. A serious fire occurred in the insured's factory due to flammable liquids. The fire Insurance policy has included the clause of excluding claims where flammable liquids have been involved.",
        "options": [
            {
                "id": "A",
                "text": "Third Party Insurance Pool"
            },
            {
                "id": "B",
                "text": "Co-insurer"
            },
            {
                "id": "C",
                "text": "Insured's insurance company"
            },
            {
                "id": "D",
                "text": "Insured will pay from his own pocket as the clause was added in policy"
            },
            {
                "id": "E",
                "text": "Insured with claim from goods, Supplier's insurance company"
            }
        ],
        "correctOption": "D",
        "explanation": "In this case, because the fire insurance policy explicitly excludes claims involving flammable liquids, the insured will have to pay for the damage from their own pocket."
    },{
    "questionId": "Q66",
    "question": "Claims are processed on the basis of the ______ and survey report, under the Money Insurance Policy.",
    "options": [
      { "id": "A", "text": "Special Report" },
      { "id": "B", "text": "TPA Report" },
      { "id": "C", "text": "Police Report" },
      { "id": "D", "text": "Search Report" },
      { "id": "E", "text": "Underwriter Report" }
    ],
    "correctOption": "C",
    "explanation": "Claims under a Money Insurance Policy are processed based on the police report and survey report."
  },
  {
    "questionId": "Q67",
    "question": "______ is an Insurance property under the Machinery Breakdown Policy.",
    "options": [
      { "id": "A", "text": "Boiler" },
      { "id": "B", "text": "Vessel" },
      { "id": "C", "text": "Aircraft" },
      { "id": "D", "text": "Laptop" },
      { "id": "E", "text": "LED Light" }
    ],
    "correctOption": "A",
    "explanation": "Insurable property under a Machinery Breakdown Policy includes boilers, electrical, mechanical machinery, and equipment."
  },
  {
    "questionId": "Q68",
    "question": "Identify from the following, the risks which are not covered under a Package Policy of motor insurance.",
    "options": [
      { "id": "A", "text": "Accidental external means" },
      { "id": "B", "text": "Burglary, house breaking or theft" },
      { "id": "C", "text": "Fire explosion, self - ignition or lightning" },
      { "id": "D", "text": "Mechanical breakdown" },
      { "id": "E", "text": "Transit by road, rail, inland waterway, lift elevator or air" }
    ],
    "correctOption": "D",
    "explanation": "Under a motor insurance Package Policy, the company is not liable for consequential loss, depreciation, wear and tear, or mechanical/electrical breakdown, failures, or breakages."
  },
  {
    "questionId": "Q69",
    "question": "Identify the option which is not a reason why reinsurance is purchased.",
    "options": [
      { "id": "A", "text": "Reinsurance stabilizes loss experience" },
      { "id": "B", "text": "Reinsurance increases underwriting capacity" },
      { "id": "C", "text": "Reinsurance provides catastrophe protections" },
      { "id": "D", "text": "Reinsurance may provide underwriting guidance" },
      { "id": "E", "text": "Reinsurance reduces the number of claims incurred" }
    ],
    "correctOption": "E",
    "explanation": "Reinsurance does not reduce the number of claims incurred but reduces the risk on the insurer."
  },
  {
    "questionId": "Q70",
    "question": "A Consequential Loss Insurance covers",
    "options": [
      { "id": "A", "text": "Any loss which is not inconsequential" },
      { "id": "B", "text": "Indemnity for the material damage" },
      { "id": "C", "text": "Loss of the value of the machinery insured" },
      { "id": "D", "text": "Loss to uninsured machinery as a consequences of Fire" },
      { "id": "E", "text": "Loss of Gross Profit and Increased Cost of Working due to stoppage of business arising out of an insured peril" }
    ],
    "correctOption": "E",
    "explanation": "The purpose of a consequential loss (also known as Loss of Profits or Business Interruption Insurance) policy is to make good for losses such as net profit, standing charges, and increased cost of working caused by a business stoppage due to an insured peril."
  },
  {
    "questionId": "Q71",
    "question": "The maximum period under the Consequential Loss Policy is",
    "options": [
      { "id": "A", "text": "5 years" },
      { "id": "B", "text": "7 years" },
      { "id": "C", "text": "3 years" },
      { "id": "D", "text": "4 years" },
      { "id": "E", "text": "6 years" }
    ],
    "correctOption": "C",
    "explanation": "The indemnity period under a Consequential Loss Policy is usually 12 months, and can extend up to a maximum of 36 months (3 years)."
  },
  {
    "questionId": "Q72",
    "question": "Which of the following is not an insurable interest?",
    "options": [
      { "id": "A", "text": "Ownership of property" },
      { "id": "B", "text": "Creditor's interest in debtor's life" },
      { "id": "C", "text": "A thief’s interest in stolen property" },
      { "id": "D", "text": "Employer’s interest in employee’s life" },
      { "id": "E", "text": "Partner’s interest in another partner’s life" }
    ],
    "correctOption": "C",
    "explanation": "Insurable interest must be legal and recognized by law. A thief has no insurable interest in stolen property."
  },
  {
    "questionId": "Q73",
    "question": "Which principle of insurance ensures that the insured does not make a profit out of a loss?",
    "options": [
      { "id": "A", "text": "Subrogation" },
      { "id": "B", "text": "Contribution" },
      { "id": "C", "text": "Indemnity" },
      { "id": "D", "text": "Insurable Interest" },
      { "id": "E", "text": "Utmost Good Faith" }
    ],
    "correctOption": "C",
    "explanation": "The principle of indemnity ensures that the insured is restored to the same financial position as before the loss, preventing profit."
  },
  {
    "questionId": "Q74",
    "question": "Which of the following is a valid contract?",
    "options": [
      { "id": "A", "text": "A contract with a minor" },
      { "id": "B", "text": "A contract made under coercion" },
      { "id": "C", "text": "A contract with lawful object and consideration" },
      { "id": "D", "text": "A contract without free consent" },
      { "id": "E", "text": "A contract with unlawful consideration" }
    ],
    "correctOption": "C",
    "explanation": "A valid contract must have lawful object and consideration along with free consent and capacity to contract."
  },
  {
    "questionId": "Q75",
    "question": "Under Fire Insurance, which of the following losses is covered?",
    "options": [
      { "id": "A", "text": "Loss by war" },
      { "id": "B", "text": "Loss by nuclear risks" },
      { "id": "C", "text": "Loss by theft during fire" },
      { "id": "D", "text": "Loss caused by fire due to lightning" },
      { "id": "E", "text": "Loss caused by riot and strike without add-on" }
    ],
    "correctOption": "D",
    "explanation": "Fire insurance covers loss caused by fire including fire due to lightning. Losses by war, theft, or riots are excluded unless specifically covered."
  },
  {
    "questionId": "Q76",
    "question": "Which of the following is a type of marine insurance policy?",
    "options": [
      { "id": "A", "text": "Floating policy" },
      { "id": "B", "text": "Group policy" },
      { "id": "C", "text": "Comprehensive policy" },
      { "id": "D", "text": "Family floater policy" },
      { "id": "E", "text": "Householder’s policy" }
    ],
    "correctOption": "A",
    "explanation": "A floating policy is a marine insurance policy covering shipments without specifying them individually at the time of contract."
  },
  {
    "questionId": "Q77",
    "question": "Which insurance principle gives the insurer the right to recover from a third party responsible for the loss?",
    "options": [
      { "id": "A", "text": "Contribution" },
      { "id": "B", "text": "Indemnity" },
      { "id": "C", "text": "Subrogation" },
      { "id": "D", "text": "Utmost Good Faith" },
      { "id": "E", "text": "Insurable Interest" }
    ],
    "correctOption": "C",
    "explanation": "The principle of subrogation gives the insurer the right to step into the shoes of the insured and recover from third parties responsible for the loss."
  },
  {
    "questionId": "Q78",
    "question": "Which of the following is covered under personal accident insurance?",
    "options": [
      { "id": "A", "text": "Death due to accident" },
      { "id": "B", "text": "Permanent disability due to accident" },
      { "id": "C", "text": "Temporary total disability due to accident" },
      { "id": "D", "text": "All of the above" },
      { "id": "E", "text": "None of the above" }
    ],
    "correctOption": "D",
    "explanation": "Personal accident insurance covers accidental death, permanent disability, and temporary total disability."
  },
  {
    "questionId": "Q79",
    "question": "Which of the following is a liability insurance?",
    "options": [
      { "id": "A", "text": "Public liability insurance" },
      { "id": "B", "text": "Motor third party insurance" },
      { "id": "C", "text": "Employer’s liability insurance" },
      { "id": "D", "text": "All of the above" },
      { "id": "E", "text": "None of the above" }
    ],
    "correctOption": "D",
    "explanation": "Public liability, motor third-party liability, and employer’s liability are all liability insurances."
  },
  {
    "questionId": "Q80",
    "question": "Which insurance is compulsory under the Motor Vehicles Act?",
    "options": [
      { "id": "A", "text": "Comprehensive insurance" },
      { "id": "B", "text": "Own damage insurance" },
      { "id": "C", "text": "Third party insurance" },
      { "id": "D", "text": "Personal accident insurance" },
      { "id": "E", "text": "Theft insurance" }
    ],
    "correctOption": "C",
    "explanation": "Third-party insurance is compulsory under the Motor Vehicles Act."
  },
  {
    "questionId": "Q81",
    "question": "Which insurance covers damage to property and injury to employees at workplace?",
    "options": [
      { "id": "A", "text": "Fire insurance" },
      { "id": "B", "text": "Workmen’s compensation insurance" },
      { "id": "C", "text": "Marine insurance" },
      { "id": "D", "text": "Life insurance" },
      { "id": "E", "text": "Health insurance" }
    ],
    "correctOption": "B",
    "explanation": "Workmen’s compensation insurance covers employer’s liability for injury to employees at the workplace."
  },
  {
    "questionId": "Q82",
    "question": "Which of the following is an example of non-life insurance?",
    "options": [
      { "id": "A", "text": "Fire insurance" },
      { "id": "B", "text": "Marine insurance" },
      { "id": "C", "text": "Motor insurance" },
      { "id": "D", "text": "Health insurance" },
      { "id": "E", "text": "All of the above" }
    ],
    "correctOption": "E",
    "explanation": "All these insurances—fire, marine, motor, health—are non-life insurances."
  },
  {
    "questionId": "Q83",
    "question": "Which principle of insurance states that both parties must disclose all material facts?",
    "options": [
      { "id": "A", "text": "Insurable Interest" },
      { "id": "B", "text": "Indemnity" },
      { "id": "C", "text": "Utmost Good Faith" },
      { "id": "D", "text": "Subrogation" },
      { "id": "E", "text": "Contribution" }
    ],
    "correctOption": "C",
    "explanation": "The principle of utmost good faith requires both insurer and insured to disclose all material facts truthfully."
  },
  {
    "questionId": "Q84",
    "question": "Which document is issued by the insurer as proof of the insurance contract?",
    "options": [
      { "id": "A", "text": "Proposal form" },
      { "id": "B", "text": "Cover note" },
      { "id": "C", "text": "Policy document" },
      { "id": "D", "text": "Endorsement" },
      { "id": "E", "text": "Certificate" }
    ],
    "correctOption": "C",
    "explanation": "The policy document issued by the insurer serves as proof of the insurance contract."
  },
  {
    "questionId": "Q85",
    "question": "Which of the following insurance is long-term?",
    "options": [
      { "id": "A", "text": "Fire insurance" },
      { "id": "B", "text": "Marine insurance" },
      { "id": "C", "text": "Motor insurance" },
      { "id": "D", "text": "Life insurance" },
      { "id": "E", "text": "Health insurance" }
    ],
    "correctOption": "D",
    "explanation": "Life insurance is a long-term contract whereas others are usually annual contracts."
  },
  {
    "questionId": "Q86",
    "question": "Which of the following is an example of insurance intermediary?",
    "options": [
      { "id": "A", "text": "Agent" },
      { "id": "B", "text": "Broker" },
      { "id": "C", "text": "Corporate agent" },
      { "id": "D", "text": "Web aggregator" },
      { "id": "E", "text": "All of the above" }
    ],
    "correctOption": "E",
    "explanation": "Agents, brokers, corporate agents, and web aggregators are all insurance intermediaries."
  },
  {
    "questionId": "Q87",
    "question": "Which of the following is excluded in health insurance policies?",
    "options": [
      { "id": "A", "text": "Pre-existing diseases (initially)" },
      { "id": "B", "text": "Cosmetic surgery" },
      { "id": "C", "text": "Self-inflicted injuries" },
      { "id": "D", "text": "War-related injuries" },
      { "id": "E", "text": "All of the above" }
    ],
    "correctOption": "E",
    "explanation": "All the given exclusions are generally not covered in health insurance policies."
  },
  {
    "questionId": "Q88",
    "question": "Which of the following is not covered under marine insurance?",
    "options": [
      { "id": "A", "text": "Perils of the sea" },
      { "id": "B", "text": "Fire" },
      { "id": "C", "text": "Piracy" },
      { "id": "D", "text": "Deliberate damage by owner" },
      { "id": "E", "text": "Collision" }
    ],
    "correctOption": "D",
    "explanation": "Deliberate damage or willful misconduct by the owner is excluded from marine insurance."
  },
  {
    "questionId": "Q89",
    "question": "Which insurance covers the risk of loss due to dishonesty of employees?",
    "options": [
      { "id": "A", "text": "Health insurance" },
      { "id": "B", "text": "Fidelity guarantee insurance" },
      { "id": "C", "text": "Fire insurance" },
      { "id": "D", "text": "Marine insurance" },
      { "id": "E", "text": "Motor insurance" }
    ],
    "correctOption": "B",
    "explanation": "Fidelity guarantee insurance covers employers against losses caused by the dishonesty of employees."
  },
  {
    "questionId": "Q90",
    "question": "Which of the following is covered under burglary insurance?",
    "options": [
      { "id": "A", "text": "Theft without force" },
      { "id": "B", "text": "Burglary involving force and violence" },
      { "id": "C", "text": "War perils" },
      { "id": "D", "text": "Terrorism" },
      { "id": "E", "text": "Floods" }
    ],
    "correctOption": "B",
    "explanation": "Burglary insurance covers theft involving force and violence."
  },
  {
    "questionId": "Q91",
    "question": "Which of the following is covered under crop insurance?",
    "options": [
      { "id": "A", "text": "Drought" },
      { "id": "B", "text": "Flood" },
      { "id": "C", "text": "Pest attack" },
      { "id": "D", "text": "Cyclone" },
      { "id": "E", "text": "All of the above" }
    ],
    "correctOption": "E",
    "explanation": "Crop insurance covers drought, flood, cyclone, pest attacks, and other perils."
  },
  {
    "questionId": "Q92",
    "question": "Which of the following documents is not used in life insurance?",
    "options": [
      { "id": "A", "text": "Proposal form" },
      { "id": "B", "text": "Medical report" },
      { "id": "C", "text": "Survey report" },
      { "id": "D", "text": "Policy bond" },
      { "id": "E", "text": "Premium receipt" }
    ],
    "correctOption": "C",
    "explanation": "Survey report is generally used in general insurance claims, not in life insurance."
  },
  {
    "questionId": "Q93",
    "question": "Which principle of insurance prevents double recovery of claims when more than one policy covers the same risk?",
    "options": [
      { "id": "A", "text": "Contribution" },
      { "id": "B", "text": "Indemnity" },
      { "id": "C", "text": "Subrogation" },
      { "id": "D", "text": "Insurable Interest" },
      { "id": "E", "text": "Utmost Good Faith" }
    ],
    "correctOption": "A",
    "explanation": "The principle of contribution prevents double recovery when multiple policies cover the same risk."
  },
  {
    "questionId": "Q94",
    "question": "Which insurance provides protection against professional negligence?",
    "options": [
      { "id": "A", "text": "Fire insurance" },
      { "id": "B", "text": "Professional indemnity insurance" },
      { "id": "C", "text": "Health insurance" },
      { "id": "D", "text": "Marine insurance" },
      { "id": "E", "text": "Life insurance" }
    ],
    "correctOption": "B",
    "explanation": "Professional indemnity insurance covers liability arising out of professional negligence or errors and omissions."
  },
  {
    "questionId": "Q95",
    "question": "Which of the following is an example of compulsory insurance in India?",
    "options": [
      { "id": "A", "text": "Fire insurance for factories" },
      { "id": "B", "text": "Marine insurance for cargo" },
      { "id": "C", "text": "Third party motor insurance" },
      { "id": "D", "text": "Life insurance for employees" },
      { "id": "E", "text": "Burglary insurance" }
    ],
    "correctOption": "C",
    "explanation": "Third-party motor insurance is compulsory under the Motor Vehicles Act in India."
  },
  {
    "questionId": "Q96",
    "question": "Which insurance principle is related to sharing of loss by multiple insurers?",
    "options": [
      { "id": "A", "text": "Subrogation" },
      { "id": "B", "text": "Contribution" },
      { "id": "C", "text": "Indemnity" },
      { "id": "D", "text": "Utmost Good Faith" },
      { "id": "E", "text": "Insurable Interest" }
    ],
    "correctOption": "B",
    "explanation": "The principle of contribution relates to sharing of loss proportionately by multiple insurers covering the same risk."
  },
  {
    "questionId": "Q97",
    "question": "Which of the following insurance products is linked to capital markets?",
    "options": [
      { "id": "A", "text": "Endowment plan" },
      { "id": "B", "text": "ULIP" },
      { "id": "C", "text": "Whole life plan" },
      { "id": "D", "text": "Term insurance" },
      { "id": "E", "text": "Money back plan" }
    ],
    "correctOption": "B",
    "explanation": "Unit Linked Insurance Plans (ULIPs) are linked to capital markets where premium is invested in funds."
  },
  {
    "questionId": "Q98",
    "question": "Which of the following is not a type of life insurance policy?",
    "options": [
      { "id": "A", "text": "Term insurance" },
      { "id": "B", "text": "Endowment policy" },
      { "id": "C", "text": "Whole life policy" },
      { "id": "D", "text": "Marine policy" },
      { "id": "E", "text": "Money back policy" }
    ],
    "correctOption": "D",
    "explanation": "Marine policy is a type of general insurance, not life insurance."
  },
  {
    "questionId": "Q99",
    "question": "Which insurance principle allows the insurer to deny claim if material facts are not disclosed?",
    "options": [
      { "id": "A", "text": "Indemnity" },
      { "id": "B", "text": "Subrogation" },
      { "id": "C", "text": "Utmost Good Faith" },
      { "id": "D", "text": "Contribution" },
      { "id": "E", "text": "Insurable Interest" }
    ],
    "correctOption": "C",
    "explanation": "Utmost good faith requires disclosure of all material facts; non-disclosure may lead to denial of claim."
  },
  {
    "questionId": "Q100",
    "question": "Which of the following is covered under engineering insurance?",
    "options": [
      { "id": "A", "text": "Contractor’s all risk insurance" },
      { "id": "B", "text": "Erection all risk insurance" },
      { "id": "C", "text": "Machinery breakdown insurance" },
      { "id": "D", "text": "All of the above" },
      { "id": "E", "text": "None of the above" }
    ],
    "correctOption": "D",
    "explanation": "Engineering insurance covers contractor’s all risk, erection all risk, and machinery breakdown insurances."
  }


]



};