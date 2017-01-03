#include <stdio.h>
#include <stdlib.h>
#include <time.h>


int main ( int argc, char** argv )

{

    
    int nombremystère = 0, nombreEntre = 0;

    const int MAX = 0, MIN = 0;


    // Génération du nombre aléatoire


    srand(time(NULL));

    nombremystère = (rand() % (MAX - MIN + 1)) + MIN;


    /* La boucle du programme. Elle se répète tant que l'utilisateur n'a pas trouvé le nombre mystère */


    do

    {

        // On demande le nombre

        printf("Choisissez un nombre compris entre 0 et 9.");

        scanf("%d", &nombreEntre);


        // On compare le nombre entré avec le nombre mystère


        if (nombremystère > nombreEntre)

            printf("C'est plus!");

        else if (nombremystère < nombreEntre)

            printf("C'est moins!");

        else

            printf ("Bravo, vous avez trouvé le nombre mystère!!\n\n");

    } while (nombreEntre != nombremystère);

    

    return 0;

