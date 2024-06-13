SUPSI 2022-23  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

Elaborato 2: Intermedio

# A.C.1D
Autore: Gizzi Andrea  
[A.C.1D](https://andrea-gizzi.github.io/A.C.1D/)

## Introduzione e tema
La consegna consisteva nella realizzazione di una pagina web che mostri come ha avuto origine e come funziona un algoritmo.

Nel mio caso, ho sviluppato un'interfaccia web interattiva che mostrasse la funzionalità e l'origine  dell'automa cellulare 1D. Dopo aver fatto una ricerca approfondita sull'algoritmo, attraverso articoli online ho potutto comprendere le informazioni necessarie ponendomi come obiettivo principale spiegare l'algoritmo in modo chiaro e intuitivo utilizzando testi esplicativi, interazioni e elementi visivi. L'interfaccia permette all'utente di navigare e approfondire attraverso tre diverse sezioni: la spiegazione dell'algoritmo, la sua storia e le regole che lo definiscono.

## Riferimenti progettuali
Nel progetto, non mi sono orientato su un modello specifico come riferimento progettuale; piuttosto, ho dedicato tempo a riflettere e approfondire su come inserire i diversi contenuti in modo chiaro e facilemnte comprensibile seguendo le loro esigenze di impaginazione. L'aspetto principale è stato selezionare un approccio visivo che valorizzasse ogni singolo contenuto in base alla ricerca in corso, rendendolo funzionale e facilmente leggibile.

## Design dell’interfraccia e modalià di interazione
Il design dell'interfaccia risulta semplice, tutte le scelte sono state effettuate per aumentare l'interazione dell'utente, attraverso una buona ergonomia e un buon senso d'orientamento. L'interfaccia presenta una struttura uniforme in tutte le sue pagine:

- Header: situato nella parte superiore, include bottoni intuitivi per: la navigazione e per il ritorno alla pagina principale del corso.
- Contenuti: centralizzati al centro della pagina, rendendo facile l'accesso e la comprensione dei materiali informativi.
- Footer: collocato nella parte inferiore, contiene informazioni sul corso, il nome dell'interfaccia e tutta la sitografia.

L'interfaccia supporta diverse modalità di interazione a seconda della pagina selezionata:

- Home: utilizza un'animazione dell'algoritmo per guidare l'utente nello sviluppo della pagina, arricchita da testi alternati con illustrazioni e immagini.
- Storia-Algoritmo: utilizza testi alternati con illustrazioni, immagini e gif per approfondire i contenuti trattati.
- Regole: raccoglie tutte le regole che influenzano l'algoritmo, rendendole interattive mediante effetti di hover per evidenziarle e mostrare il relativo codice binario.

Questa struttura uniforme e le modalità di interazione differenziate contribuiscono a rendere l'interfaccia accattivante e accessibile, promuovendo una navigazione chiara e informativa per gli utenti.


## Tecnologia usata
Nunc consequat interdum varius sit amet mattis vulputate. Vehicula ipsum a arcu cursus vitae congue. Odio ut sem nulla pharetra. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Quisque egestas diam in arcu cursus. Eget nulla facilisi etiam dignissim diam. Aenean sed adipiscing diam donec adipiscing tristique. Porttitor massa id neque aliquam. Sem viverra aliquet eget sit amet tellus cras. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Lacus sed turpis tincidunt id aliquet risus feugiat.


```JavaScript
const image = new Image();
image.onload = () => {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(
		gl.TEXTURE_2D,
		level,
		internalFormat,
		srcFormat,
		srcType,
		image
	);
	if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
		gl.generateMipmap(gl.TEXTURE_2D);
	} else {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	}
};
image.src = url;
```

## Target e contesto d’uso
Sed enim ut sem viverra aliquet eget sit. Iaculis at erat pellentesque adipiscing commodo. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Ipsum faucibus vitae aliquet nec ullamcorper sit. Tempus quam pellentesque nec nam aliquam sem et tortor. Turpis egestas sed tempus urna et pharetra pharetra massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.

[<img src="doc/munari.jpg" width="300" alt="Supplemento al dizionario italiano">]()
