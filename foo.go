// This is a comment

package main

import (
	"fmt"
	"math"
	"os"
	"time"
)

// Type definition
type MyInt int

type Person struct {
	Name string
}

// Function definition
func add(a int, b int) int {
	return a + b
}

func greet(name string) {
	fmt.Println(name)
}

func main() {
	// Variable
	var x int = 42
	var y MyInt = 10

	// Constant
	const PI = 3.14
	const color = 0xFFFFFF

	// Numeric constant
	const num = 42

	// Character constant
	char := 'A'

	// Escape sequence
	newline := "\n"

	// String
	message := "Hello, World!"

	// Function call
	result := add(3, 4)
	fmt.Println(result)

	// Using an external function
	fmt.Println(math.Pi)
	fmt.Println(os.Getenv("PATH"))

	// Keyword usage
	if x == 42 {
		fmt.Println("X is 42")
	}

	// Using a struct
	p := Person{Name: "Alice"}
	fmt.Println(p.Name)

	// Defer example
	defer fmt.Println("Done")

	// Time unit
	duration := time.Second
	fmt.Println(duration)
}
