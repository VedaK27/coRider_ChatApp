// import React from 'react';
// import { Image, StyleSheet, View, ViewStyle } from 'react-native';

// interface AvatarProps {
//   imageUrl: string;
//   size?: number;
//   style?: ViewStyle;
// }

// export default function Avatar({ imageUrl, size = 32, style }: AvatarProps) {
//   return (
//     <Image
//       source={{ uri: imageUrl }}
//       style={[
//         styles.avatar,
//         {
//           width: size,
//           height: size,
//           borderRadius: size / 2,
//         },
//         style, // ✅ use the custom prop style
//       ]}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   avatar: {
//     backgroundColor: '#f0f0f0',
//   },
// });

import React from 'react';
import { Image, ImageStyle, StyleSheet } from 'react-native';

interface AvatarProps {
  imageUrl: string;
  size?: number;
  style?: ImageStyle; // ✅ Changed from ViewStyle to ImageStyle
}

export default function Avatar({ imageUrl, size = 32, style }: AvatarProps) {
  return (
    <Image
      source={{ uri: imageUrl }}
      style={[
        styles.avatar,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#f0f0f0',
  },
});
