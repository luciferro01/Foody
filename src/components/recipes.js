import { View, Text, Pressable, Image } from "react-native";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import React from "react";
// import { mealData } from "../constants/index.js";
import Animated, { FadeInDown } from "react-native-reanimated";
import MasonryList from "@react-native-seoul/masonry-list";
const Recipes = (categories, meals) => {
  // console.log(meals[0]["idMeal"]);

  // console.log(meals[0].idMeal);
  console.log(meals);
  return (
    <View className="space-y-3 mx-4">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-600"
      >
        Recipes
      </Text>
      <View>
        {categories.length == 0 && meals.length == 0 ? null : (
          <MasonryList
            data={meals}
            keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, i }) => (
              <RecipeCard item={item} index={i} navigation={navigation} />
            )}
            // refreshing={isLoadingNext}
            // onRefresh={() => refetch({first: ITEM_CNT})}
            onEndReachedThreshold={0.1}
            // onEndReached={() => loadNext(ITEM_CNT)}
          />
        )}
      </View>
    </View>
  );
};

const RecipeCard = (item, index) => {
  let isEven = index % 2 == 0;
  return (
    <Animated.View
      entering={FadeInDown.delay(200).duration(600).springify().damping(12)}
    >
      <Pressable
        // style={{ width: hp(3.5), height: hp(3) }}
        style={{
          width: "100%",
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
        }}
        className="flex justify-center mb-4 space-y-1"
      >
        <Image
          source={{ uri: item.strMealThumb }}
          style={{
            width: "100%",
            height: isEven ? hp(25) : hp(35),
            borderRadius: 35,
          }}
          className="bg-black/5"
        />
        <Text
          className="text-neutral-600 font-semibold"
          style={{ fontSize: hp(1.5) }}
        >
          {/* {item.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name} */}
          {item.strMeal}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default Recipes;
