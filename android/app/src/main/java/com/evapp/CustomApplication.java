package com.evapp;

import com.facebook.react.bridge.JSIModulePackage; // <- add
import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add

public class CustomApplication extends MainApplication {

    @Override
    protected JSIModulePackage getJSIModulePackage() {
        return new ReanimatedJSIModulePackage(); // <- add
    }

}