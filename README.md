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

### Prototype

Creates a copy of an object without being costly, reducing subclasses, thanks to runtime initialization.

#### Structure

- client
- prototype interface
- concrete prototype

- Pros: removes initializations
- Cons: complex objects are difficult to copy

### Singleton

A single class create a single instance of that object, creating a global access point.

#### Structure

- client
- singleton

- Pros: intialized first time only
- Cons: against single responsability principle

## Structural patterns

Make incopatiblr interfaces to collaborate, composing objetcs and attaching new behaviors

### Adapter

Defines a bridge between two incopatible classes, using a single interface to join them.

- Object adapter
- Class adapter

#### Structure

- client interface
- client
- adapter
- service

- Pros: single responsability, open / close
- Cons: complex

### Composite

Compose objects in a tree structure, like a single instance

#### Structure

- client
- interface component
- composite
- leaf

- Pros: conveniet tree structure, open/closed principle
- Cons: difficult commin interface

### Decorator

Assings new behavior to objects, avoiding inheritance.

#### Structure

- client
- component interface
- concrete component
- base decorator
- concrete decorator

- Pros: easier then inheritance
- Cons: hard to setup

### Facade

One single class in order to hide multiple classes complexity, structurating a system into layers.

#### Structure

- client
- facade
- subsystem classes

- Pros: isolate complexity
- Cons: coupled to app parts

## Behavioral

Loose coupling between objects, mantaining comunication between them

### Iterator

Travers collection, hiding its underlying structure

#### Structure

- client
- interator interface
- concrete iterator
- collection interface
- concrete collection

- Pros: single responsability & open/closed
- Cons: collection only & less efficient

### State

Object oriented state machine that alters its behavior depending on state.

#### Structure

- client
- context
- state interface
- concrete state

- Pros: single responsability and open/closed
- Cons: overkill for few states

### Template method

Defines the skeleton of an algorithm in an abstract super class: subclasses override that method.

#### Structure

- abstract class
- concrete classes

- Pros: avoids duplication
- Cons: hard to mantain

### Command

Object encapsulate request information, performing anction or triggering an event.

#### Structure

- client
- invoker
- revicer
- command interface
- concrete command

- Pros: single responsibility and open/closed
- Cons: complex

### Mediator

Rescrict direct communication between objects

#### Structure

- mediator
- concrete mediator
- components

- Pros: reusability
- Cons: overtime

