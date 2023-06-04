import { Circle, Image, Stack } from 'ui';

// this is the component that renders differently in dev vs prod
const Demo = () => {
  return (
    <Stack position="relative" alignItems="center" justifyContent="center" width={400} height={300}>
      <Image
        source={{ uri: '//picsum.photos/seed/asd/400/300' }}
        alt=""
        width={'100%'}
        height={'100%'}
        position="absolute"
        zIndex={0}
      />
      <Circle size="$6" backgroundColor="tomato" />
    </Stack>
  );
};

const PlacesIndexPage = () => {
  return (
    <>
      <Stack position="absolute" />

      <Demo />
    </>
  );
};

export default PlacesIndexPage;
