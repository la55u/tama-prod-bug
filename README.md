# Tamagui bug report

## Bug description

Styles are sometimes different in dev and prod

## Reproduction steps

1.  clone the repo
2.  run `yarn`
3.  run `yarn web`
4.  open localhost:3000 and confirm the circle is positined inside the image, centered on both axis
5.  kill the console
6.  run yarn `build:web && yarn start:web`
7.  refresh the browser and see that the circle is below the image

## Possible solutions

The below solutions each work independently and solve the problem in _this_ simple demo after a rebuild (step 6.) but they're quite random hacks and obviously not useful in a real app.

- remove the `position: absolute` style in Row.tsx
- comment out the `<Row/>` in \_app.tsx on line 25
- remove `<Wrapper/>` in MyApp in \_app.tsx
- remove `position=absolute` from the `<Stack/>` in index.tsx on line 23
- comment out the `<Stack/>` entirely index.tsx on line 23
