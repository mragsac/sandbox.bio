<script>
import Link from "$components/Link.svelte";
import Execute from "$components/Execute.svelte";
import Alert from "$components/Alert.svelte";
</script>

For this tutorial, we preloaded data from `plink`'s official <Link href="https://science.sciencemag.org/content/337/6099/1190">teaching resources</Link> linked in the documentation. Typically, the files used in `plink` are quite large. Luckily, this dataset is a small fraction of the size you would expect to handle for one's own projects!

Let's start out by taking a look at what files we have in our directory to play with using the <Execute command={"ls"} inline /> command. Your directory should contain two files: an `extra.map` and an `extra.ped` file. 

Next, use the <Execute command={"head extra.map"} inline /> and <Execute command={"head extra.ped"} inline /> commands to preview the `extra.map` and `extra.ped` files, respectively.

The `*.map` and `*.ped` files are human-readable versions of the `plink` file format and are always found together as a pair with the same basename.

<Alert>
    A `*.map` file contains human-readable information about each variant we have genotyping data for. These files contain several columns, including:

        Chromosome
        Marker ID
        Genetic distance
        Physical position

    On the other hand, `*.ped` files represent the "pedigree" information for the genotyping data and thus contain the following columns: 
    
        Family ID
        Sample ID
        Paternal ID
        Maternal ID
        Sex (1=male; 2=female; other=unknown)
        Affection (0=unknown; 1=unaffected; 2=affected)
        Genotypes (space or tab separated, 2 for each marker. 0=missing)
</Alert>
