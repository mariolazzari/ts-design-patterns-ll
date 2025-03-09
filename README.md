# TypeScript design patterns by LinkedIn Learning

## Desing pattern

- Solves specific problem
- Provide context
- Known examples

## Types

- Creational: object creation
- Structural: object collaboration
- Behavioral: passing info between objects

## OOP

- Classes
- Inheritance
- Encapsulaion
- Abstraction
- Polymorphism

## Creational patterns

- Object: defer object creation to another
- Class: defer class creation to subclass

### Builder

Construct object step by step: each step is independent, without telescoping constructor

- Pros: same constructor, isolation
- Cons: complex

#### Structure

- Client
- Director
- Builder interface
- Builders

### Factory

Defines an interface or an abstract class for object creation: subclasses are responsible for creating instances.
It's useful when you do not not dependencies, like whn you are building libs of frameworks.

- Allow users to customize their usage
- Reuse existing objects
- Pros: loose coupling, move class creation in one single place, no breaking changes when introducing new classes
- Cons: too many subclasses

#### Structure

- Creator
- Product interface
- Concrete products

### Abstract factory

Create family of related objects, using composition of subclasses

- Pros: ensure all classes to work togheter
- Cons: complex
