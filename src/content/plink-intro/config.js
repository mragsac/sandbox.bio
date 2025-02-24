// Steps
import Intro from "./steps/Introduction.md";
import Step1 from "./steps/Step1.md";
import Step2 from "./steps/Step2.md";
import Conclusion from "./steps/Conclusion.md";

// Exercises
import Exercise1 from "./exercises/Exercise1.md";
import Exercise2 from "./exercises/Exercise2.md";

export const config = {
	// Metadata
	id: "plink-intro",
	name: "Genetic analyses with plink",
	subtitle: `by <a href="https://mragsac.com/" target="_blank">Michelle Franc Ragsac</a>`,
	description: "Play around with genotyping data with plink1.9",
	tags: ["plink", "bcftools"],
	difficulty: ["intermediate"],

	// Preload these tools as soon as the page loads
	tools: ["plink", "bcftools", "ls", "head"],

	// Order of steps
	steps: [
		{ name: "Genetic analyses with plink", component: Intro },
		{ name: "plink data format", component: Step1 },
		{ name: "plink help", component: Step2 },
		
		// We use subtitle to define subsections. 
		// Click the "1 / 6" button at the bottom to see the effect on the table of contents
		{ name: "Exercises", component: Exercise1, subtitle: "Find non-exons", header: true },
		{ name: "Exercises", component: Exercise2, subtitle: "Find exons in 500kb regions" },
		
		{ name: "The end", component: Conclusion, header: true }
	],

	// Files within "data/" that you need at runtime.
	// Whenever you update files within "data/", you will need to restart the "./setup.sh" script.
	files: ["extra.map", "extra.ped"]
};
