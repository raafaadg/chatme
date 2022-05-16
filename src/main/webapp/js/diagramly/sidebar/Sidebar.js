(function()
{
	/**
	 * Download from following URL as TSV and convert using https://jgraph.github.io/drawio-tools/tools/convert.html:
	 * https://docs.google.com/spreadsheets/d/1sAL1zn-UtmJtKPH4cLApGjRX-TRSJa5dYdfZ9NKYfRs
	 * Maps package and stencil names to additional tags.
	 */
	Sidebar.prototype.tagIndex = '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';

	/**
	 * To update this, go to https://test.draw.io/?dev=1&test=1&drawdev=1&demo=1&createindex=1 and
	 * copy the output of searchFileData from the browser console to the variable below.
	 */
	Sidebar.prototype.searchIndexData = '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';
	
	/**
	 * Overrides gear image URL.
	 */
	Sidebar.prototype.gearImage = GRAPH_IMAGE_PATH + '/clipart/Gear_128x128.png';
	
	/**
	 * Aliases for IDs in the libs parameter.
	 */
	Sidebar.prototype.libAliases = {'aws2': 'aws3', 'gcp' : 'gcp2'};
	
	/**
	 * 
	 */
	Sidebar.prototype.defaultEntries = 'basic';
	
	/**
	 * Library definitions 
	 */
	Sidebar.prototype.office = ['Clouds', 'Communications', 'Concepts', 'Databases', 'Devices', 'Security', 'Servers', 'Services', 'Sites', 'Users'];

	/**
	 * Description of custom libraries, see https://www.diagrams.net/doc/faq/configure-diagram-editor
	 */
	Sidebar.prototype.customEntries = null;
	
	/**
	 * Array of strings for the built-in libraries to be enabled in the more shapes dialog. Null means all,
	 * empty array means none, possible keys are listed for the libs parameter at
	 * 
	 * https://www.diagrams.net/doc/faq/supported-url-parameters
	 */
	Sidebar.prototype.enabledLibraries = null;
	
	/**
	 * Maximum number of custom libraries to preload into the search index.
	 */
	Sidebar.prototype.maxPreloadCount = 20;

	/**
	 *
	 */
	Sidebar.prototype.configuration = [{id: 'general', libs: ['general', 'misc']},
									   {id: 'search'},
									   {id: 'clipart', prefix: null, libs: ['computer', 'finance', 'clipart', 'networking', 'people', 'telco']},
           	                           {id: 'office', prefix: 'office', libs: Sidebar.prototype.office}];
	
	/**
	 * Removes disabled libraries from search results.
	 */
	var sidebarAddEntry = Sidebar.prototype.addEntry;

	Sidebar.prototype.addEntry = function(tags, fn)
	{
		if (this.currentSearchEntryLibrary != null && this.enabledLibraries != null &&
			mxUtils.indexOf(this.enabledLibraries, this.currentSearchEntryLibrary.id) < 0)
		{
			return fn;
		}
		else
		{
			return sidebarAddEntry.apply(this, arguments);
		}	
	};

	/**
	 * Refreshes scratchpad.
	 */
	var sidebarRefresh = Sidebar.prototype.refresh;
	Sidebar.prototype.refresh = function()
	{
		var ui = this.editorUi;
		sidebarRefresh.apply(this, arguments);

		if (ui.scratchpad != null)
		{
			ui.loadLibrary(new StorageLibrary(ui,
				ui.scratchpad.getData(),
				'.scratchpad'));
		}
	};

	/**
	 * Adds hint for quick tutorial video for certain search terms.
	 */
	var siderbarInsertSearchHint = Sidebar.prototype.insertSearchHint;
	
	Sidebar.prototype.insertSearchHint = function(div, searchTerm, count, page, results, len, more, terms)
	{
		if (terms != null && page == 1)
		{
			var hintText = null;
			
			// Adds hint for text inserts
			if (mxUtils.indexOf(terms, 'text') >= 0)
			{
				hintText = 'Double click anywhere in the diagram to insert text.';
			}
			else
			{
				// Checks if any of the following keywords are in the search terms
				var words = ['line', 'lines', 'arrow', 'arrows', 'connect', 'connection', 'connections',
				             'connector', 'connectors', 'curve', 'curves', 'link', 'links', 'directed',
				             'directional', 'bidirectional'];
				
				for (var i = 0; i < words.length; i++)
				{
					if (mxUtils.indexOf(terms, words[i]) >= 0)
					{
						hintText = 'Need help with connections?';
						break;
					}
				}
			}
			
			if (hintText != null && !this.hideSearchHint)
			{
				var link = document.createElement('a');
				link.setAttribute('href', 'https://youtu.be/Z0D96ZikMkc');
				link.setAttribute('target', '_blank');
				link.className = 'geTitle';
				link.style.cssText = 'background-color:#ffd350;border-radius:6px;color:black;' +
					'border:1px solid black !important;text-align:center;white-space:normal;' +
					'padding:6px 0px 6px 0px !important;margin:4px 4px 8px 2px;font-size:12px;';
				mxUtils.write(link, hintText);
				
				// Adds close button
				var img = document.createElement('img');
				img.setAttribute('src', Dialog.prototype.closeImage);
				img.setAttribute('title', mxResources.get('hide'));
				img.className = 'geDialogClose';
				img.style.position = 'relative';
				img.style.cursor = 'default';
				img.style.top = '1px';
				img.style.right = '0px';
				
				mxEvent.addListener(img, 'click', mxUtils.bind(this, function(evt)
				{
					link.parentNode.removeChild(link);
					this.hideSearchHint = true;
					mxEvent.consume(evt);
				}));
				
				link.appendChild(img);
				div.appendChild(link);
				
				// Shows hint only once
				this.hideSearchHint = true;
			}
		}
		
		siderbarInsertSearchHint.apply(this, arguments);
	};

	/**
	 * Toggle palette.
	 */
	Sidebar.prototype.togglePalettes = function(prefix, ids)
	{
		this.showPalettes(prefix, ids);
	};

	/**
	 * Toggle palette.
	 */
	Sidebar.prototype.togglePalette = function(id)
	{
		this.showPalette(id);
	};
	
	/**
	 * Shows or hides palettes.
	 */
	Sidebar.prototype.showPalettes = function(prefix, ids, visible)
	{
		for (var i = 0; i < ids.length; i++)
		{
			this.showPalette(prefix + ids[i], visible);
		}
	};

	/**
	 * Shows or hides a palette.
	 */
	Sidebar.prototype.showPalette = function(id, visible)
	{
		var elts = this.palettes[id];
		
		if (elts != null)
		{
			var vis = (visible != null) ? ((visible) ? 'block' : 'none') : (elts[0].style.display == 'none') ? 'block' : 'none';
			
			for (var i = 0; i < elts.length; i++)
			{
				elts[i].style.display = vis;
			}
		}
		
		return elts;
	};
	
	/**
	 * 
	 */
	Sidebar.prototype.getConfigurationById = function(id)
	{
		for (var i = 0; i < this.configuration.length; i++)
		{
			if (this.configuration[i].id == id)
			{
				return this.configuration[i];
			}
		}
		
		if (this.customEntries != null)
		{
			for (var i = 0; i < this.customEntries.length; i++)
			{
				var section = this.customEntries[i];
				
				for (var j = 0; j < section.entries.length; j++)
				{
					var entry = section.entries[j];
					
					if (entry.id == id)
					{
						return {id: entry.id, libs: entry.libs};
					}
				}
			}
		}
		
		return null;
	};
	
	/**
	 * 
	 */
	Sidebar.prototype.isEntryVisible = function(key)
	{
		if (key == '.scratchpad')
		{
			return this.editorUi.scratchpad != null;
		}
		else
		{
			var config = this.getConfigurationById(key);
			
			if (config != null)
			{
				var id = (config.libs != null) ? ((config.prefix || '') + config.libs[0]) : key;
				var elts = this.palettes[id];

				if (elts != null)
				{
					return elts[0].style.display != 'none';
				}
			}
			
			if (this.customEntries != null)
			{
				for (var i = 0; i < this.customEntries.length; i++)
				{
					var section = this.customEntries[i];
					
					for (var j = 0; j < section.entries.length; j++)
					{
						var entry = section.entries[j];
						
						if (entry.id == key)
						{
							if (entry.libs != null && entry.libs.length > 0)
							{
								var elts = this.palettes[entry.id + '.0'];
								
								if (elts != null)
								{
									return elts[0].style.display != 'none';
								}
							}
						
							break;
						}
					}
				}
			}
			
			return false;
		}
	};

	/**
	 * 
	 */
	Sidebar.prototype.showEntries = function(entries, remember, force)
	{
		var all = [];
		
		if (remember)
		{
			mxSettings.setLibraries(entries);
			mxSettings.save();
		}
		
		if (entries != null && (force || entries.length > 0))
		{
			all.push(entries);
		}
		else 
		{
			var done = false;
			
			if (urlParams['libs'] != null && urlParams['libs'].length > 0) 
			{
				all.push(decodeURIComponent(urlParams['libs']));
				done = this.editorUi.getServiceName() == 'draw.io';
			}
			
			// Libs parameter overrides configuration for online app so that
			// links can be created to show just the specifies libraries
			if (!done)
			{
				if (mxSettings != null && mxSettings.settings != null) 
				{
					all.push(mxSettings.getLibraries());
				}
				else 
				{
					all.push(this.defaultEntries);
				}
			}
		}
		
		// Merges array of semicolon separated strings into a single array
		var temp = all.join(';').split(';');

		// Resolves aliases and creates lookup
		var visible = {};
		
		for (var i = 0; i < temp.length; i++)
		{
			visible[this.libAliases[temp[i]] || temp[i]] = true; 
		}
		
		for (var i = 0; i < this.configuration.length; i++)
		{
			// Search has separate switch in Extras menu
			if (this.configuration[i].id != 'search')
			{
				this.showPalettes(this.configuration[i].prefix || '',
					this.configuration[i].libs || [this.configuration[i].id],
					visible[this.configuration[i].id] == true);

			}
		}
		
		if (this.customEntries != null)
		{
			for (var i = 0; i < this.customEntries.length; i++)
			{
				var section = this.customEntries[i];
				
				for (var j = 0; j < section.entries.length; j++)
				{
					var entry = section.entries[j];
					
					if (entry.libs != null && entry.libs.length > 0)
					{
						var libs = [];
						
						for (var k = 0; k < entry.libs.length; k++)
						{
							libs.push(entry.id + '.' + k);
						}
						
						this.showPalettes('', libs, visible[entry.id]);
					}
				}
			}
		}
	};

	/**
	 * Overrides the sidebar init.
	 */
	Sidebar.prototype.init = function()
	{
		// Defines all entries for the sidebar. This is used in the MoreShapes dialog. Create screenshots using the savesidebar URL parameter and
		// http://www.alderg.com/merge.html for creating a vertical stack of PNG images if multiple sidebars are part of an entry.

		var stdEntries = [
			{title: mxResources.get('general'), id: 'general', image: IMAGE_PATH + '/sidebar-general.png'},
			{title: mxResources.get('basic'), id: 'basic', image: IMAGE_PATH + '/sidebar-basic.png'},
			{title: mxResources.get('arrows'), id: 'arrows2', image: IMAGE_PATH + '/sidebar-arrows2.png'},
			{title: mxResources.get('clipart'), id: 'clipart', image: IMAGE_PATH + '/sidebar-clipart.png'}
		]
		
		if (urlParams['sketch'] == '1')
		{
			stdEntries = [{title: mxResources.get('searchShapes'), id: 'search'},
				{title: mxResources.get('scratchpad'), id: '.scratchpad'}].
				concat(stdEntries);
		}

		this.entries = [{title: mxResources.get('standard'), entries: stdEntries}];

		// Uses search.xml index file instead (faster load times)
		this.addStencilsToIndex = false;
		
		// Contains additional tags for shapes
		this.shapetags = {};

		// Adds tags from compressed text file for improved searches
		if (this.tagIndex != null)
		{
			this.addTagIndex(Graph.decompress(this.tagIndex));
			this.tagIndex = null;	
		}
		
		this.initPalettes();
	}
	
	/**
	 * Overridden to add image export via servlet
	 */
	if (urlParams['savesidebar'] == '1')
	{
		Sidebar.prototype.addFoldingHandler = function(title, content, funct)
		{
			var initialized = false;
	
			// Avoids mixed content warning in IE6-8
			if (!mxClient.IS_IE || document.documentMode >= 8)
			{
				title.style.backgroundImage = (content.style.display == 'none') ?
					'url(\'' + this.collapsedImage + '\')' : 'url(\'' + this.expandedImage + '\')';
			}
			
			title.style.backgroundRepeat = 'no-repeat';
			title.style.backgroundPosition = '0% 50%';
	
			var btn = document.createElement('button');
			btn.style.marginLeft = '4px';
			mxUtils.write(btn, 'Save');
			
			mxEvent.addListener(title, 'click', mxUtils.bind(this, function(evt)
			{
				if (mxEvent.getSource(evt).nodeName == 'BUTTON')
				{
					var title2 = title.cloneNode(true);
					title2.style.backgroundImage = '';
					title2.style.textDecoration = 'none';
					title2.style.fontWeight = 'bold';
					title2.style.fontSize = '14px';
					title2.style.color = 'rgb(80, 80, 80)';
					title2.style.width = '456px';
					title2.style.backgroundColor = '#ffffff';
					title2.style.paddingLeft = '6px';
					
					var btn2 = title2.getElementsByTagName('button')[0];
					btn2.parentNode.removeChild(btn2);
					
					var clone = content.cloneNode(true);
					clone.style.backgroundColor = '#ffffff';
					clone.style.borderColor = 'transparent';
					clone.style.width = '456px';
	
					var parser = new DOMParser();
					var doc = parser.parseFromString('<body style="background:#ffffff;font-family:Helvetica,Arial;">' +
							title2.outerHTML + clone.outerHTML + '</body>', 'text/html');
					
					this.editorUi.editor.convertImages(doc.documentElement, mxUtils.bind(this, function(body)
					{
						var html = '<!DOCTYPE html><html><head><link rel="stylesheet" type="text/css" ' +
							'href="https://www.draw.io/styles/grapheditor.css"></head>' +
							mxUtils.getXml(body) + '</html>';
		
						clone.style.position = 'absolute';
						window.document.body.appendChild(clone);
						var h = clone.clientHeight + 18;
						clone.parentNode.removeChild(clone);
						
						this.editorUi.confirm('Image data created', mxUtils.bind(this, function()
						{
				    		new mxXmlRequest(EXPORT_URL, 'w=456&h=' + h + '&html=' + encodeURIComponent(
				    			Graph.compress(html))).simulate(document, '_blank');
						}), null, mxResources.get('save'), mxResources.get('cancel'));
					}));
					
					return;
				}
				
				if (content.style.display == 'none')
				{
					if (!initialized)
					{
						initialized = true;
						
						if (funct != null)
						{
							if (btn.parentNode != null)
							{
								btn.parentNode.removeChild(btn);
							}
							
							// Wait cursor does not show up on Mac
							title.style.cursor = 'wait';
							var prev = title.innerHTML;
							title.innerHTML = mxResources.get('loading') + '...';
							
							window.setTimeout(function()
							{
								funct(content);
								title.style.cursor = '';
								title.innerHTML = prev;
								title.appendChild(btn);
							}, 0);
						}
						else
						{
							title.appendChild(btn);
						}
					}
					else
					{
						title.appendChild(btn);
					}
					
					title.style.backgroundImage = 'url(\'' + this.expandedImage + '\')';
					content.style.display = 'block';
				}
				else
				{
					title.style.backgroundImage = 'url(\'' + this.collapsedImage + '\')';
					content.style.display = 'none';
					
					if (btn.parentNode != null)
					{
						btn.parentNode.removeChild(btn);
					}
				}
				
				mxEvent.consume(evt);
			}));
		};
	};
	
	/**
	 * Overridden to use shapetags to improve search results.
	 */
	Sidebar.prototype.extractShapeStyle = function(style)
	{
		if (style != null && style.substring(0, 6) == 'shape=')
		{
			var semi = style.indexOf(';');
			
			if (semi < 0)
			{
				semi = style.length;
			}
			
			return style.substring(6, semi);
		}
		
		return null;
	};
	
	/**
	 * Overridden to use shapetags to improve search results.
	 */
	var sidebarGetTagsForStencil = Sidebar.prototype.getTagsForStencil;
	
	Sidebar.prototype.getTagsForStencil = function(pkg, stc, moreTags)
	{
		var tags = sidebarGetTagsForStencil.apply(this, arguments);
		
		// Adds tags from tags file
		if (this.shapetags != null)
		{
			pkg = pkg.toLowerCase();
			stc = stc.toLowerCase();
			
			if (this.shapetags[pkg] != null)
			{
				tags.push(this.shapetags[pkg]);
			}
			
			stc = pkg + '.' + stc;
			
			if (this.shapetags[stc] != null)
			{
				tags.push(this.shapetags[stc]);
			}
		}

		return tags;
	};
	
	/**
	 * Overrides the sidebar init.
	 */
	Sidebar.prototype.addTagIndex = function(text)
	{
		var lines = text.split('\n');
		
		for (var i = 0; i < lines.length; i++)
		{
			if (lines[i] != null)
			{
				var tags = lines[i].split('\t');
				
				if (tags.length > 1)
				{
					var key = tags[0].toLowerCase().replace(' ', '_');
					var value = mxUtils.trim(tags.slice(1, tags.length).join(' ').toLowerCase());
					
					if (value.length > 0)
					{
						this.shapetags[key] = value;
					}
				}
			}
		}
	};
		
	/**
	 * Adds shape search UI.
	 */
	Sidebar.prototype.showPopupMenuForEntry = function(elt, libs, evt)
	{
		if (libs != null && libs.length > 0)
		{
			var offset = mxUtils.getOffset(elt);
		
			this.editorUi.showPopupMenu(mxUtils.bind(this, function(menu, parent)
			{
				menu.addItem(mxResources.get('openLibrary'), null, mxUtils.bind(this, function()
				{
					for (var i = 0; i < libs.length; i++)
					{
						(mxUtils.bind(this, function(lib)
						{
							var config = this.getConfigurationById(lib.id);
							
							if (config != null)
							{
								this.showPalettes(config.prefix || '', config.libs || [config.id], true);
								var elts = this.showPalette(libs[i].lib || libs[i].id, true);
								
								if (elts != null && elts.length > 1 && elts[1].firstChild != null &&
									(elts[1].firstChild.firstChild == null ||
									elts[1].firstChild.style.display == 'none'))
								{
									elts[0].click();
								}
								
								window.setTimeout(function()
								{
									elts[1].scrollIntoView(true);
								}, 0);
								
								mxEvent.consume(evt);
							}
						}))(libs[i]);
					}
				}));
			}), offset.x, offset.y + elt.offsetHeight, evt);
		}
	};

	/**
	 * Overrides the sidebar init.
	 */
	Sidebar.prototype.addSearchIndex = function(shapes)
	{
		if (shapes != null)
		{
			for (var i = 0; i < shapes.length; i++)
			{
				if (shapes[i].style != null)
				{
					var style = shapes[i].style;
					var shapeStyle = this.extractShapeStyle(style);
					
					if (shapeStyle != null)
					{
						var lastDot = shapeStyle.lastIndexOf('.');
						
						if (lastDot > 0)
						{
							var pkg = shapeStyle.substring(0, lastDot);
							var stc = shapeStyle.substring(lastDot + 1, shapeStyle.length);
							var tags = this.getTagsForStencil(pkg, stc, shapes[i].tags);
							
							// TODO: Use shapetags for programmatic stencils
							if (tags != null)
							{
								// Converts stencil name to lowercase
								var semi = style.indexOf(';');
								style = 'shape=' + pkg + '.' + stc.toLowerCase() + ';' +
									((semi < 0) ? '' : style.substring(semi + 1));
								this.setCurrentSearchEntryLibrary(shapes[i].id, shapes[i].lib);
								this.createVertexTemplateEntry(style, parseInt(shapes[i].w),
										parseInt(shapes[i].h), '', stc.replace(/_/g, ' '),
										null, null, this.filterTags(tags.join(' ')));
								this.setCurrentSearchEntryLibrary();
							}
						}
					}
				}
			}
		}
	};
	
	/**
	 * Overrides the sidebar init.
	 */
	Sidebar.prototype.initPalettes = function()
	{
		var imgDir = GRAPH_IMAGE_PATH;
		var dir = STENCIL_PATH;
		
		if (urlParams['createindex'] == '1')
		{
			this.createdSearchIndex = [];
		}

		this.addSearchPalette(true);
		
		// Adds custom sections first
		if (this.customEntries != null)
		{
			var preloadCount = 0;
			
			for (var i = 0; i < this.customEntries.length; i++)
			{
				var section = this.customEntries[i];
				
				for (var j = 0; j < section.entries.length; j++)
				{
					var entry = section.entries[j];
					
					for (var k = 0; k < entry.libs.length; k++)
					{
						(mxUtils.bind(this, function(lib)
						{
							var data = null;
							var error = null;
							var content = null;
							var title = null;
							
							var showError = mxUtils.bind(this, function(err, c)
							{
								var div = document.createElement('span');
								div.style.paddingBottom = '6px';
								div.style.paddingTop = '6px';
								div.style.fontSize = '11px';
								mxUtils.write(div, err);
								c.innerHTML = '<img align="top" src="' + mxGraph.prototype.warningImage.src + '"/> ';
								c.appendChild(div);
							});
							
							var barrier = mxUtils.bind(this, function()
							{
								if (content != null && title != null)
								{
									if (error != null)
									{
										content.style.display = 'block';
										title.innerHTML = '';
										mxUtils.write(title, this.editorUi.getResource(lib.title));
										showError(error, content);
									}
									else if (data != null)
									{
										this.editorUi.addLibraryEntries(data, content);
										content.style.display = 'block';
										title.innerHTML = '';
										mxUtils.write(title, this.editorUi.getResource(lib.title));
									}
									else
									{
										content.style.display = 'none';
										title.innerHTML = '';
										mxUtils.write(title, mxResources.get('loading') + '...');
									}
								}
							});
							
							if (lib.data == null && lib.url != null && (!lib.preload && preloadCount >= this.maxPreloadCount))
							{
								this.addPalette(entry.id + '.' + k, this.editorUi.getResource(lib.title),
									false, mxUtils.bind(this, function(content, title)
								{
									var dataLoaded = mxUtils.bind(this, function(images)
									{
										this.setCurrentSearchEntryLibrary(entry.id, entry.id + '.' + k);
										this.addEntries(images);
										this.setCurrentSearchEntryLibrary();
										this.editorUi.addLibraryEntries(images, content);
									});

									content.style.display = 'none';
									title.innerHTML = '';
									mxUtils.write(title, mxResources.get('loading') + '...');
									
									var url = lib.url;
									
									if (!this.editorUi.editor.isCorsEnabledForUrl(url))
									{
										url = PROXY_URL + '?url=' + encodeURIComponent(url);
									}
									
									this.editorUi.editor.loadUrl(url, mxUtils.bind(this, function(data)
									{
										content.style.display = 'block';
										title.innerHTML = '';
										mxUtils.write(title, this.editorUi.getResource(lib.title));

										try
										{
											var doc = mxUtils.parseXml(data);
											
											if (doc.documentElement.nodeName == 'mxlibrary')
											{
												var images = JSON.parse(mxUtils.getTextContent(doc.documentElement));
												dataLoaded(images);
											}
											else
											{
												showError(mxResources.get('notALibraryFile'), content);
											}
										}
										catch (e)
										{
											showError(mxResources.get('error') + ': ' + e.message, content);
										}
									}));
								}));
							}
							else
							{							
								this.addPalette(entry.id + '.' + k, this.editorUi.getResource(lib.title),
									false, mxUtils.bind(this, function(c, t)
								{
									content = c;
									title = t;
									barrier();
								}));
								
								if (lib.data != null)
								{
									this.setCurrentSearchEntryLibrary(entry.id, entry.id + '.' + k);
									this.addEntries(lib.data);
									this.setCurrentSearchEntryLibrary();
									data = lib.data;
									barrier();
								}
								else if (lib.url != null)
								{
									preloadCount++;					
									var url = lib.url;
									
									if (!this.editorUi.editor.isCorsEnabledForUrl(url))
									{
										url = PROXY_URL + '?url=' + encodeURIComponent(url);
									}
									
									this.editorUi.editor.loadUrl(url, mxUtils.bind(this, function(temp)
									{
										try
										{
											var doc = mxUtils.parseXml(temp);
											
											if (doc.documentElement.nodeName == 'mxlibrary')
											{
												data = JSON.parse(mxUtils.getTextContent(doc.documentElement));
												this.addEntries(data);
												barrier();
											}
											else
											{
												error = mxResources.get('notALibraryFile');
												barrier();
											}
										}
										catch (e)
										{
											error = mxResources.get('error') + ': ' + e.message;
											barrier();
										}
									}), mxUtils.bind(this, function(e)
									{
										error = (e != null && e.message != null) ? e.message : e;
										barrier();
									}));
								}
								else
								{
									error = mxResources.get('invalidInput');
									barrier();
								}
							}
						}))(entry.libs[k]);
					}
				}
			}
		}
		
		this.addGeneralPalette(this.customEntries == null);
		this.addMiscPalette(false);	
		this.addBasicPalette();
		this.addStencilPalette('arrows', mxResources.get('arrows'), dir + '/arrows.xml',
				';html=1;' + mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=2;strokeColor=#000000;',
				null, null, null, null, null, 'arrows');
		this.addArrows2Palette();
		
		this.setCurrentSearchEntryLibrary('clipart', 'computer');
		this.addImagePalette('computer', 'Clipart / Computer', imgDir
				+ '/lib/clip_art/computers/', '_128x128.png', ['Antivirus',
				'Data_Filtering', 'Database', 'Database_Add', 'Database_Minus',
				'Database_Move_Stack', 'Database_Remove', 'Fujitsu_Tablet',
				'Harddrive', 'IBM_Tablet', 'iMac', 'iPad', 'Laptop', 'MacBook',
				'Mainframe', 'Monitor', 'Monitor_Tower',
				'Monitor_Tower_Behind', 'Netbook', 'Network', 'Network_2',
				'Printer', 'Printer_Commercial', 'Secure_System', 'Server',
				'Server_Rack', 'Server_Rack_Empty', 'Server_Rack_Partial',
				'Server_Tower', 'Software', 'Stylus', 'Touch', 'USB_Hub',
				'Virtual_Application', 'Virtual_Machine', 'Virus',
				'Workstation' ], [ 'Antivirus', 'Data Filtering', 'Database',
	            'Database Add', 'Database Minus', 'Database Move Stack',
	            'Database Remove', 'Fujitsu Tablet', 'Harddrive', 'IBMTablet',
	            'iMac', 'iPad', 'Laptop', 'MacBook', 'Mainframe', 'Monitor',
	            'Monitor Tower', 'Monitor Tower Behind', 'Netbook', 'Network',
	            'Network 2', 'Printer', 'Printer Commercial', 'Secure System',
	            'Server', 'Server Rack', 'Server Rack Empty', 'Server Rack Partial',
	            'Server Tower', 'Software', 'Stylus', 'Touch', 'USB Hub',
	            'Virtual Application', 'Virtual Machine', 'Virus', 'Workstation']);
		
		this.setCurrentSearchEntryLibrary('clipart', 'finance');		
		this.addImagePalette('finance', 'Clipart / Finance', imgDir
				+ '/lib/clip_art/finance/', '_128x128.png', [ 'Arrow_Down',
				'Arrow_Up', 'Coins', 'Credit_Card', 'Dollar', 'Graph',
				'Pie_Chart', 'Piggy_Bank', 'Safe', 'Shopping_Cart',
				'Stock_Down', 'Stock_Up'], ['Arrow_Down', 'Arrow Up',
	            'Coins', 'Credit Card', 'Dollar', 'Graph', 'Pie Chart',
	            'Piggy Bank', 'Safe', 'Shopping Basket', 'Stock Down', 'Stock Up']);
		
		this.setCurrentSearchEntryLibrary('clipart', 'clipart');		
		this.addImagePalette('clipart', 'Clipart / Various', imgDir
				+ '/lib/clip_art/general/', '_128x128.png', [ 'Battery_0',
				'Battery_100', 'Battery_50', 'Battery_75', 'Battery_allstates',
				'Bluetooth', 'Earth_globe', 'Empty_Folder', 'Full_Folder',
				'Gear', 'Keys', 'Lock', 'Mouse_Pointer', 'Plug', 'Ships_Wheel',
				'Star', 'Tire' ], [ 'Battery 0%', 'Battery 100%', 'Battery 50%',
	            'Battery 75%', 'Battery', 'Bluetooth', 'Globe',
	            'Empty Folder', 'Full Folder', 'Gear', 'Keys', 'Lock', 'Mousepointer',
	            'Plug', 'Ships Wheel', 'Star', 'Tire']);
		
		this.setCurrentSearchEntryLibrary('clipart', 'networking');
		this.addImagePalette('networking', 'Clipart / Networking', imgDir
				+ '/lib/clip_art/networking/', '_128x128.png', ['Bridge',
				'Certificate', 'Certificate_Off', 'Cloud', 'Cloud_Computer',
				'Cloud_Computer_Private', 'Cloud_Rack', 'Cloud_Rack_Private',
				'Cloud_Server', 'Cloud_Server_Private', 'Cloud_Storage',
				'Concentrator', 'Email', 'Firewall_02', 'Firewall',
				'Firewall-page1', 'Ip_Camera', 'Modem',
				'power_distribution_unit', 'Print_Server',
				'Print_Server_Wireless', 'Repeater', 'Router', 'Router_Icon',
				'Switch', 'UPS', 'Wireless_Router', 'Wireless_Router_N'],
				['Bridge', 'Certificate', 'Certificate Off', 'Cloud', 'Cloud Computer',
				'Cloud Computer Private', 'Cloud Rack', 'Cloud Rack Private',
				'Cloud Server', 'Cloud Server Private', 'Cloud Storage',
				'Concentrator', 'Email', 'Firewall 1', 'Firewall 2',
				'Firewall', 'Camera', 'Modem',
				'Power Distribution Unit', 'Print Server',
				'Print Server Wireless', 'Repeater', 'Router', 'Router Icon',
				'Switch', 'UPS', 'Wireless Router', 'Wireless Router N'],
				 {'Wireless_Router': 'wireless router switch wap wifi access point wlan',
				  'Wireless_Router_N': 'wireless router switch wap wifi access point wlan',
				  'Router': 'router switch',
				  'Router_Icon': 'router switch'});
		
		this.setCurrentSearchEntryLibrary('clipart', 'people');
		this.addImagePalette('people', 'Clipart / People', imgDir
				+ '/lib/clip_art/people/', '_128x128.png', ['Suit_Man',
				'Suit_Man_Black', 'Suit_Man_Blue', 'Suit_Man_Green',
				'Suit_Man_Green_Black', 'Suit_Woman', 'Suit_Woman_Black',
				'Suit_Woman_Blue', 'Suit_Woman_Green',
				'Suit_Woman_Green_Black', 'Construction_Worker_Man',
				'Construction_Worker_Man_Black', 'Construction_Worker_Woman',
				'Construction_Worker_Woman_Black', 'Doctor_Man',
				'Doctor_Man_Black', 'Doctor_Woman', 'Doctor_Woman_Black',
				'Farmer_Man', 'Farmer_Man_Black', 'Farmer_Woman',
				'Farmer_Woman_Black', 'Nurse_Man', 'Nurse_Man_Black',
				'Nurse_Woman',
				'Nurse_Woman_Black',
				'Military_Officer', 'Military_Officer_Black',
				'Military_Officer_Woman', 'Military_Officer_Woman_Black',
				'Pilot_Man', 'Pilot_Man_Black', 'Pilot_Woman',
				'Pilot_Woman_Black', 'Scientist_Man', 'Scientist_Man_Black',
				'Scientist_Woman', 'Scientist_Woman_Black', 'Security_Man',
				'Security_Man_Black', 'Security_Woman', 'Security_Woman_Black',
				'Tech_Man', 'Tech_Man_Black',
				'Telesales_Man', 'Telesales_Man_Black', 'Telesales_Woman',
				'Telesales_Woman_Black', 'Waiter', 'Waiter_Black',
				'Waiter_Woman', 'Waiter_Woman_Black', 'Worker_Black',
				'Worker_Man', 'Worker_Woman', 'Worker_Woman_Black']);
		
		this.setCurrentSearchEntryLibrary('clipart', 'telco');
		this.addImagePalette('telco', 'Clipart / Telecommunication', imgDir
				+ '/lib/clip_art/telecommunication/', '_128x128.png', [
				'BlackBerry', 'Cellphone', 'HTC_smartphone', 'iPhone',
				'Palm_Treo', 'Signal_tower_off', 'Signal_tower_on' ],
				['BlackBerry', 'Cellphone', 'HTC smartphone', 'iPhone',
				  'Palm Treo', 'Signaltower off', 'Signaltower on']);
		this.setCurrentSearchEntryLibrary();

		// LATER: Check if conflicts with restore libs after loading file
		this.showEntries();
		
		if (this.createdSearchIndex != null)
		{
			console.log('searchFileData', Graph.compress(JSON.stringify(this.createdSearchIndex)));
		}
	};
	
	/**
	 * Overridden to manually create search index for stencil files which are not pre-loaded
	 * and no entries are created programmatically.
	 */
	if (urlParams['createindex'] == '1')
	{
		var sidebarAddStencilPalette = Sidebar.prototype.addStencilPalette;
		
		Sidebar.prototype.addStencilPalette = function(id, title, stencilFile, style, ignore, onInit, scale, tags, customFns, groupId)
		{
			sidebarAddStencilPalette.apply(this, arguments);
			scale = (scale != null) ? scale : 1;
	
			// Used for creating index
			mxStencilRegistry.loadStencilSet(stencilFile, mxUtils.bind(this, function(packageName, stencilName, displayName, w, h)
			{
				if (this.createdSearchIndex != null && ignore == null || mxUtils.indexOf(ignore, stencilName) < 0)
				{
					var entry = {style: 'shape=' + packageName + stencilName + style,
						w: Math.round(w * scale), h: Math.round(h * scale)};
					var tmpTags = (tags != null) ? tags[stencilName] : null;
					
					if (tmpTags != null)
					{
						entry.tags = tmpTags;
					}
					
					if (groupId != null)
					{
						entry.id = groupId;
						entry.lib = id;
					}
					
					this.createdSearchIndex.push(entry);
				}
			}), true);
		};
	}

	/**
	 * Extracs icons from the search result.
	 */
	Sidebar.prototype.extractIconsFromResponse = function(res, results)
	{
		for (var i = 0; i < res.icons.length; i++)
		{
			var sizes = res.icons[i].raster_sizes;
			var index = sizes.length - 1;
			
			while (index > 0 && sizes[index].size > 128)
			{
				index--;
			}

			var size = sizes[index].size;
			var url = sizes[index].formats[0].preview_url;

			if (size != null && url != null)
			{
				(mxUtils.bind(this, function(s, u)
				{
					results.push(mxUtils.bind(this, function()
					{
						return this.createVertexTemplate('shape=image;html=1;verticalAlign=top;' +
							'verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;imageAspect=0;' +
							'aspect=fixed;image=' + u, s, s, '');
					}));
				}))(size, url);
			}
		}
	};
	
	/**
	 * Adds server icon results to local search results
	 */
	var sidebarSearchEntries = Sidebar.prototype.searchEntries;
	
	Sidebar.prototype.searchEntries = function(searchTerms, count, page, success, error)
	{
		var succ = success;
		
		// Lazy-load indices
		if (this.searchIndexData != null)
		{
			this.addSearchIndex(JSON.parse(Graph.decompress(this.searchIndexData)));
			this.searchIndexData = null;
		}
		
		if (ICONSEARCH_PATH != null)
		{
			success = mxUtils.bind(this, function(results, len, more, terms)
			{
				if (!this.editorUi.isOffline() && results.length <= count / 4)
				{
					var pg = page - Math.ceil((len - count / 4) / count);
	
					mxUtils.get(ICONSEARCH_PATH + '?q=' + encodeURIComponent(searchTerms) +
						'&p=' + pg + '&c=' + count, mxUtils.bind(this, function(req)
					{
						try
						{
							// Ignore response if nothing or error returned
							if (req.getStatus() >= 200 && req.getStatus() <= 299 &&
								req.getText() != null && req.getText().length > 0)
							{
								try
								{
									var res = JSON.parse(req.getText());
									
									if (res == null || res.icons == null)
									{
										succ(results, len, false, terms);
										this.editorUi.handleError(res);
									}
									else
									{
										this.extractIconsFromResponse(res, results);
										succ(results, (page - 1) * count + results.length, res.icons.length == count, terms);
									}
								}
								catch (e)
								{
									succ(results, len, false, terms);
									this.editorUi.handleError(e);
								}
							}
							else
							{
								succ(results, len, false, terms);
							}
						}
						catch (e)
						{
							succ(results, len, false, terms);
							this.editorUi.handleError(e);
						}
					},
					function()
					{
						succ(results, len, false, terms);
					}));
				}
				else
				{
					succ(results, len, more || !this.editorUi.isOffline(), terms);
				}
			});
		}
		
		sidebarSearchEntries.apply(this, arguments);
	};

	/**
	 * Adds a click handler for inserting the cell as target for dangling edge.
	 */
	var sidebarItemClicked = Sidebar.prototype.itemClicked;
	
	Sidebar.prototype.itemClicked = function(cells, ds, evt)
	{
		var graph = this.editorUi.editor.graph;
		var handled = false;
		
		if (cells != null && graph.getSelectionCount() == 1 && graph.getModel().isVertex(cells[0]))
		{
			var target = graph.cloneCell(cells[0]);
			
			// Inserts cell as target of selected edge if not connected
			if (graph.getModel().isEdge(graph.getSelectionCell()) && graph.getModel().getTerminal(graph.getSelectionCell(), false) == null &&
				graph.getModel().isVertex(target))
			{
				graph.getModel().beginUpdate();
				try
				{
					var edgeState = graph.view.getState(graph.getSelectionCell());
					
					if (edgeState != null)
					{
						var tr = graph.view.translate;
						var s = graph.view.scale;
						var pt = edgeState.absolutePoints[edgeState.absolutePoints.length - 1];

						target.geometry.x = pt.x / s - tr.x - target.geometry.width / 2;
						target.geometry.y = pt.y / s - tr.y - target.geometry.height / 2;
					}
					
					graph.addCell(target);
					graph.getModel().setTerminal(graph.getSelectionCell(), target, false);
					
					if (evt == null || !mxEvent.isShiftDown(evt))
					{
						graph.fireEvent(new mxEventObject('cellsInserted', 'cells', [target]));
					}
				}
				catch (e)
				{
					this.editorUi.handleError(e);
				}
				finally
				{
					graph.getModel().endUpdate();
				}
				
				graph.scrollCellToVisible(target);
				graph.setSelectionCell(target);
				handled = true;
			}
		}
		
		if (!handled)
		{
			sidebarItemClicked.apply(this, arguments);
		}
	};
})();
