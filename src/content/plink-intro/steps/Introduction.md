<script>
import Link from "$components/Link.svelte";
import Alert from "$components/Alert.svelte";
</script>

Genome-wide association studies (GWAS) performed to identify variants associated with a particular trait or disease. During a GWAS analysis, researchers will identify areas of the genome that have a strong signal associated with a phenotype of interest by comparing variants present between a discovery cohort and controls.

Our goal for this tutorial is to work through examples that demonstrate how to explore and manipulate GWAS data using the `plink` command-line package. <Link href="https://www.cog-genomics.org/plink/1.9/">PLINK</Link> is the most commonly used GWAS software that can run association analyses as well as quality control and regression steps! Given the size and nature of genomic data, it is likely that you will be using `plink` via remote access to a high-performance computer running Linux. 

Similar to the `bcftools` tutorial, this tutorial is meant as an introduction to get your feet wet. There are many more options available in `plink` than presented here. We therefore encourage you to read the <Link href="https://www.cog-genomics.org/plink/1.9/">`plink` documentation</Link> for more details on the toolkit's functionality.

<Alert>
	Within this tutorial, we will be focusing on version 1.9 of the `plink` software. While there is version 2.0 available for `plink`, it is still in its beta software phase despite widespead use.
</Alert>
