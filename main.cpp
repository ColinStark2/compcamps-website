//this is my first attempt at c++


#include <iostream>
#include <string>
#include<stdlib.h>
#include<time.h>
using namespace std;

int lives= 3;
int guess;
int number;

void levelOne(); // function prototypes

void levelTwo();
void levelThree();

int main()
{srand (time (NULL));// generating random seed
   // making a number variable
  int number;
  number = rand() % 5 + 1;
  cout <<"I am thingking of a number between 1-5" << endl;
  cout << "can you guess it"<< endl;

// guess> number
//you high geuss number
do
{
  cin >> guess;
  if (guess > number )
  {
    cout << "Too high, Guess again" << endl;
lives --;
    /* code */
  }

  if (guess < number ) {
   cout << "too low guess again" << endl;
   lives --;
 }
  //  guess> number
  //you low geuss number
  // guess> number
  // you are correct <<endl
  if (guess == number)
  {
    cout << "you are correct"<< endl;
    return 0;
  }
}while (lives >= 1 );
  /* code */
}


bool geussing()
return false;
}

void levelOne()
{
number = rand() % 5 + 1; // generating a random seed between 1-5
if (guessing(number)) {
  levelTwo();
}
}

void levelTwo()
{
number = rand() % 15 + 1; // generating a random seed between 1-5
if (guessing(number)) {
  levelTwo();
}
