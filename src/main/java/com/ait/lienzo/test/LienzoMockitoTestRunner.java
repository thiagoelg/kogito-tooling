/*
 *
 *    Copyright (c) 2014,2015,2016 Ahome' Innovation Technologies. All rights reserved.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 *  
 */

package com.ait.lienzo.test;

import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwtmockito.GwtMockitoTestRunner;
import org.junit.runner.Description;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;
import org.junit.runner.notification.RunListener;
import org.junit.runner.notification.RunNotifier;
import org.junit.runners.model.InitializationError;

import java.util.Collection;

/**
 * The main JUnit test runner class.
 * 
 * By annotation your test class using <code>@RunWith( LienzoMockitoTestRunner.class )</code> the lienzo testing
 * framework comes into scene and its being loaded on your testing classpath.  
 *
 * @See com.ait.lienzo.test.loader.LienzoMockitoClassLoader
 * 
 * @author Roger Martinez
 * @since 1.0
 *
 */
public class LienzoMockitoTestRunner extends GwtMockitoTestRunner
{
    public LienzoMockitoTestRunner(Class<?> unitTestClass) throws InitializationError
    {
        super(init(unitTestClass));
    }

    private static Class<?> init(Class<?> unitTestClass)
    {
        try
        {
            return LienzoMockito.init(unitTestClass);
        }
        catch (Exception e)
        {
            throw new RuntimeException("Error initializing Lienzo Mockito.", e);
        }
    }

    @Override
    public void run(final RunNotifier notifier)
    {
        RunNotifier wrapperNotifier = new RunNotifier();

        wrapperNotifier.addListener(new RunListener()
        {
            @Override
            public void testAssumptionFailure(Failure failure)
            {
                notifier.fireTestAssumptionFailed(failure);
            }

            @Override
            public void testFailure(Failure failure) throws Exception
            {
                notifier.fireTestFailure(failure);
            }

            @Override
            public void testFinished(Description description) throws Exception
            {
                notifier.fireTestFinished(description);
            }

            @Override
            public void testIgnored(Description description) throws Exception
            {
                notifier.fireTestIgnored(description);
            }

            @Override
            public void testRunFinished(Result result) throws Exception
            {
                notifier.fireTestRunFinished(result);
            }

            @Override
            public void testRunStarted(Description description) throws Exception
            {
                notifier.fireTestRunStarted(description);
            }

            @Override
            public void testStarted(Description description) throws Exception
            {
                //Class<?> testClass = description.getTestClass();
                notifier.fireTestStarted(description);
            }
        });
        super.run(wrapperNotifier);
    }

    /**
     * Additional classes those methods needs to be no-op stubbed.
     */
    @Override
    protected Collection<Class<?>> getClassesToStub()
    {
        Collection<Class<?>> toStub = super.getClassesToStub();

        toStub.add(RootPanel.class);

        return toStub;
    }
}
