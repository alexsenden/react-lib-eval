'<TabList>' + ''.join([f"<Tab>{d['label']}</Tab>" for d in json.loads(arg_value.replace('"content": ', '"content": "').replace('>},', '>"},').replace('>}]', '>"}]'))]) + '</TabList>' + '<TabPanels>' + ''.join([f"<TabPanel>{d['content']}</TabPanel>" for d in json.loads(arg_value.replace('"content": ', '"content": "').replace('>},', '>"},').replace('>}]', '>"}]'))]) + '</TabPanels>'