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
  if (
    new Date(start) == null ||
    new Date(start) == undefined ||
    new Date(start) <= new Date()
  )
    return false;
  else return true;
};

export const checkEnd = (start, end) => {
  if (
    new Date(end) == null ||
    new Date(end) == undefined ||
    new Date(end) <= new Date(start)
  )
    return false;
  else return true;
};
