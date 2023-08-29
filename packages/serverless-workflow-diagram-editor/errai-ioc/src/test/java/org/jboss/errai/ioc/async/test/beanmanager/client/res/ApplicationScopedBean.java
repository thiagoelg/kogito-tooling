/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *  http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License. 
 */


package org.jboss.errai.ioc.async.test.beanmanager.client.res;

import javax.annotation.PreDestroy;
import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.inject.Singleton;

import com.google.gwt.user.client.Random;
import org.jboss.errai.ioc.client.api.LoadAsync;

/**
 * @author Mike Brock
 */
@Singleton @LoadAsync
public class ApplicationScopedBean {
  @Inject DependentScopedBean bean1;
  @Inject DependentScopedBean bean2;

  // the dependent qualification is optional -- this just confirms it doesn't break when used.
  @Inject @Dependent DependentScopedBean bean3;
  
  @Inject @Dependent DependentScopedBeanWithDependencies beanWithDependencies;

  private boolean preDestroyCalled = false;

  private static int counter = 0;

  public int beanId = ++counter * Random.nextInt();

  public DependentScopedBean getBean1() {
    return bean1;
  }

  public DependentScopedBean getBean2() {
    return bean2;
  }

  public DependentScopedBean getBean3() {
    return bean3;
  }

  public DependentScopedBeanWithDependencies getBeanWithDependencies() {
    return beanWithDependencies;
  }

  @PreDestroy
  private void preDestroy() {
    preDestroyCalled = true;
  }

  public boolean isPreDestroyCalled() {
    return preDestroyCalled;
  }

  public int getBeanId() {
    return beanId;
  }
}
