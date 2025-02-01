# Shopify Skeleton Theme
This theme is intended to be a starter theme for building sites on the Shopify platform. It uses Liquid for templating and Tailwind CSS for styling elements.

## Why?
I needed a barebones, minimalist project to get started building on Shopify. I began looking at Dawn and realized it was more complex than what I needed. This theme is inspired heavily be functionality and features found there but with far fewer opinions and settings.

## Requirements
- Shopify CLI
- Node.js
- NPM

## Get Started
1. Clone this repo
2. Install everything with `npm install`
3. Open a terminal and run `npm run watch` to watch for style changes in your CSS
4. Open another terminal and run `npm run start` to start the Shopify CLI (`shopify theme dev`)

## Structure
All Shopify sites require a basic structure. Various reusable components can be found in `snippets`, the core layout is located at `layout/theme.liquid`, and templates for different pages and page types are at `templates`. Static assets like CSS, JS, and images can be located in `assets/`. Dynamic sections that should be adjustable within the Shopify admin are found in `sections/`.

## What next?
Simply start putting together your site!
