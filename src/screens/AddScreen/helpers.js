import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import * as Haptics from "expo-haptics";

import { wsize, hsize } from "../../utils/Dimensions";
import { createEvent } from "../../aws-functions/eventFunctions";

export const checkName = (name) => {
  if (name == "") return false;
  else return true;
};

export const checkLocation = (location) => {
  if (location == null || location == undefined || location == "") return false;
  else return true;
};

export const checkStart = (start) => {
  if (start == null || start == undefined || start <= new Date()) return false;
  else return true;
};

export const checkEnd = (start, end) => {
  if (end == null || end == undefined || end <= start) return false;
  else return true;
};
