import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { categoryData } from "../constants";

const Categories = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((cat, index) => {
          let isActive = cat.strCategory == activeCategory;
          let activeButtonClass = isActive ? "bg-amber-400" : "bg-black/10";
          return (
            <TouchableOpacity
              onPress={() => setActiveCategory(cat.strCategory)}
              key={index}
              className="flex items-center space-y-1"
            >
              <View
                className={
                  "rounded-full items-center justify-center " +
                  activeButtonClass
                }
                style={{ height: hp(8), width: hp(8) }}
              >
                <Image
                  className="rounded-full"
                  source={{ uri: cat.strCategoryThumb }}
                  style={{ height: hp(6), width: hp(6) }}
                />
              </View>
              <Text className="text-neutral-600 " style={{ fontSize: hp(1.5) }}>
                {cat.strCategory}
              </Text>
            </TouchableOpacity>
          );
        })}

        {/* categoryData.map((cat, index) =>{}) */}
      </ScrollView>
    </View>
  );
};

export default Categories;
