import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  Image,
  Dimensions,
} from "react-native";

// Vector Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Custom Components & Functions
import { COLORS } from "../variables/color";
import { useStateValue } from "../StateProvider";
import { getPrivacyPolicy } from "../language/stringPicker";

const { width: deviceWidth } = Dimensions.get("window");
const PrivacyPolicyScreen = () => {
  const [{ appSettings, rtl_support, ios }] = useStateValue();
  const [privacyPolicyData, setPrivacyPolicyData] = useState(
    getPrivacyPolicy(appSettings.lng)
  );

  const rtlText = rtl_support && {
    writingDirection: "rtl",
    textAlign: ios ? "justify" : "right",
  };
  const rtlView = rtl_support && {
    flexDirection: "row-reverse",
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainWrap}>
          <View style={styles.bgImgWrap}>
            <Image
              source={require("../assets/pp_bg.png")}
              style={styles.bgImg}
            />
          </View>
          <View style={styles.detailWrap}>
            {privacyPolicyData.paras.map((_para, index) => (
              <View key={index} style={styles.descriptionParaWrap}>
                {!!_para.paraTitle && (
                  <>
                    <Text style={[styles.paraTitle, rtlText]}>
                      {_para.paraTitle}
                    </Text>
                    <View style={styles.line} />
                  </>
                )}
                {_para.paraType === "para" ? (
                  <Text style={[styles.paraDetail, rtlText]}>
                    {_para.paraDetail}
                  </Text>
                ) : (
                  <View style={styles.bulletParaWrap}>
                    {_para.paraDetail.map((_bullet, index) => (
                      <View key={index} style={[styles.bulletWrap, rtlView]}>
                        <MaterialCommunityIcons
                          name="circle-medium"
                          size={15}
                          color="black"
                        />
                        <Text style={styles.bulletDetail}>{_bullet}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
            {!!privacyPolicyData.link &&
              !!privacyPolicyData.linkedPara.length && (
                <View style={styles.linkedParaWrap}>
                  <Text
                    style={{
                      fontSize: 14,
                      lineHeight: 22,
                    }}
                  >
                    {privacyPolicyData.linkedPara[0]}
                    <Text
                      style={styles.linkedText}
                      onPress={() => {
                        Linking.openURL(privacyPolicyData.link);
                      }}
                    >
                      {privacyPolicyData.linkedPara[1]}
                    </Text>
                    {privacyPolicyData.linkedPara[2]}
                  </Text>
                </View>
              )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#DEE0E3",
    marginBottom: 15,
  },
  bgImg: {
    width: deviceWidth * 0.35,
    height: deviceWidth * 0.35 * 1.5,
    resizeMode: "contain",
  },
  bgImgWrap: {
    width: deviceWidth,
    height: deviceWidth * 0.35 * 1.5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  bulletDetail: {
    paddingHorizontal: 5,
    fontSize: 14,
    lineHeight: 22,
  },
  bulletParaWrap: {
    width: "100%",
    textAlign: "justify",
  },
  bulletWrap: {
    flexDirection: "row",
    marginRight: 5,
    alignItems: "center",
  },
  container: {
    backgroundColor: "#F5F5F6",
    flex: 1,
  },
  descriptionParaWrap: {
    marginBottom: 20,
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 6,
    elevation: 1,
  },
  detailWrap: {
    width: "100%",
  },
  linkedParaWrap: {
    marginBottom: 10,
  },
  linkedText: {
    color: COLORS.blue,
    fontSize: 14,
    lineHeight: 22,
  },
  paraDetail: {
    textAlign: "justify",
    fontSize: 14,
    lineHeight: 20,
  },
  paraTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    lineHeight: 24,
  },
  mainWrap: {
    paddingHorizontal: "3%",
    paddingVertical: 15,
    width: "100%",
  },
});

export default PrivacyPolicyScreen;
