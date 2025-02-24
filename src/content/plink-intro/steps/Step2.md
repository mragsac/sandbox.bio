<script>
import Execute from "$components/Execute.svelte";
import Alert from "$components/Alert.svelte";
import Link from "$components/Link.svelte";
</script>

PLINK is a command-line tool. To bring up the help, just type <Execute command={"plink"} inline />.

As you can see, `plink` has several flags that you can specify to evaluate your data! 

But to use `plink`, you must always first specify the "inputs" to the `plink` command before adding any additional flags. The `plink` documentation has an in-depth description of the various acceptable input file formats on the <Link href="https://www.cog-genomics.org/plink/1.9/input">"Standard data input" page</Link>. 

Within this tutorial we'll be going through two of the most commonly-used formats: the human-readable `plink` file format (e.g., `*.map` and `*.ped` paired files) and the `plink` binary file format (e.g., `*.bed`, `*.bim`, `*.fam` triplet files).

You can load the `*.map` and `*.ped` paired files with `--file INPUT_FILE_BASENAME`. Try using the following command to load in our example files: <Execute command={"plink --file extra"} inline />.

Loading in `plink` binary files is similar, except we specify `--bfile INPUT_FILE_BASENAME` instead of the `--file` flag. Try using this command to load in our example files: <Execute command={"plink --bfile extra"} inline />.

<Alert>
While we can access the information within `*.ped` and `*.map` files using `plink`, this format is not the native format that should be used for `plink` (version 1.9) and will result in commands running inefficiently. It's recommended that you convert these files to the binary file format (e.g., `*.bed`, `*.bim`, `*.fam`) before performing any operations.
</Alert>

You can also bring up the version information with <Execute command={"plink --version"} inline />.

And if you were interested in more detailed help regarding `plink`'s parameters, you can use the command <Execute command={"plink --help"} inline />.