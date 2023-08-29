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

package org.kie.workbench.common.dmn.client.widgets.grid.controls.list;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;

import org.gwtbootstrap3.client.ui.Icon;
import org.jboss.errai.common.client.dom.Span;
import org.jboss.errai.ui.shared.api.annotations.DataField;
import org.jboss.errai.ui.shared.api.annotations.Templated;

@Templated
@Dependent
public class ListSelectorHeaderItemViewImpl implements ListSelectorHeaderItemView {

    @DataField
    private Span text;

    @DataField
    private Icon icon;

    public ListSelectorHeaderItemViewImpl() {
        //CDI proxy
    }

    @Inject
    public ListSelectorHeaderItemViewImpl(final Span text, final Icon icon) {
        this.text = text;
        this.icon = icon;
    }

    @Override
    public void setText(final String text) {
        this.text.setTextContent(text);
    }

    @Override
    public void setIconClass(final String iconClass) {
        this.icon.getElement().setClassName(iconClass);
    }
}
