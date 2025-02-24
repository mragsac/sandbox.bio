<script>
import Alert from "$components/Alert.svelte";
import Link from "$components/Link.svelte";
</script>

We can perform **genome-wide association studies (GWAS)** with genotyping data to identify variants (e.g., single nucleotide polymorphisms (SNP), structural variant (SV), etc.) associated with a particular trait or disease. During a GWAS analysis, researchers will identify areas of the genome that have a strong signal associated with a phenotype of interest by comparing variants present between a discovery cohort and controls.

<Link href="https://www.cog-genomics.org/plink/1.9/">PLINK</Link> is the most commonly used GWAS software that can run association analyses as well as quality control and regression steps! Given the size and nature of genomic data, it is likely that you will be using the `plink` genetics toolkit via remote access to a high-performance computer (e.g., HPC) running the Linux operating system.

Our goal for this tutorial is to work through examples that demonstrate how to explore and manipulate genotyping data with PLINK!

<Alert>
	Within this tutorial, we will be focusing on **version 1.9** of the `plink` command line toolkit. While there is version 2.0 available for `plink`, it is still in its alpha software phase despite widespead use by various researchers.
</Alert>

Similar to the `bcftools` tutorial, this tutorial is meant as an introduction to get your feet wet. There are many more options available in `plink` than presented here. We therefore encourage you to read the <Link href="https://www.cog-genomics.org/plink/1.9/">PLINK documentation</Link> for more details on the toolkit's functionality.
