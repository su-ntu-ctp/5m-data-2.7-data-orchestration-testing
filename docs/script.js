// Tab Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeCollapsibles();
    addScrollAnimations();
});

// Tab Switching
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Scroll to top of content
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Collapsible Sections
function initializeCollapsibles() {
    const collapsibleButtons = document.querySelectorAll('.collapsible-btn');
    
    collapsibleButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            
            const content = this.nextElementSibling;
            content.classList.toggle('active');
            
            // Add smooth transition effect
            if (content.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });
    });
}

// Add scroll animations for cards
function addScrollAnimations() {
    const cards = document.querySelectorAll('.card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Add code copy functionality for code blocks
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach((block) => {
        const pre = block.parentElement;
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.className = 'copy-code-btn';
        copyButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 6px 12px;
            background: var(--accent-primary);
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.85rem;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 10;
        `;
        
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
        wrapper.appendChild(copyButton);
        
        wrapper.addEventListener('mouseenter', () => {
            copyButton.style.opacity = '1';
        });
        
        wrapper.addEventListener('mouseleave', () => {
            copyButton.style.opacity = '0';
        });
        
        copyButton.addEventListener('click', async () => {
            const code = block.textContent;
            
            try {
                await navigator.clipboard.writeText(code);
                copyButton.textContent = 'Copied!';
                copyButton.style.background = 'var(--accent-success)';
                
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                    copyButton.style.background = 'var(--accent-primary)';
                }, 2000);
            } catch (err) {
                copyButton.textContent = 'Failed';
                copyButton.style.background = 'var(--accent-warning)';
                
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                    copyButton.style.background = 'var(--accent-primary)';
                }, 2000);
            }
        });
    });
});

// Add subtle parallax effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.pageYOffset;
    
    if (header && scrollPosition < 300) {
        header.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        header.style.opacity = `${1 - (scrollPosition / 500)}`;
    }
});

// Add interactive hints
document.addEventListener('DOMContentLoaded', function() {
    const hintBoxes = document.querySelectorAll('.hint-box');
    
    hintBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Add smooth scroll for internal links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Interactive tag highlighting
document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.tag, .source-tag');
    
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Add pulse animation
            this.style.animation = 'pulse 0.5s';
            
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
});

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    
    .copy-code-btn:hover {
        background: var(--accent-secondary) !important;
        transform: scale(1.05);
    }
`;
document.head.appendChild(style);

// Add keyboard navigation for tabs
document.addEventListener('keydown', function(e) {
    const tabButtons = Array.from(document.querySelectorAll('.tab-btn'));
    const activeTab = document.querySelector('.tab-btn.active');
    const currentIndex = tabButtons.indexOf(activeTab);
    
    if (e.key === 'ArrowRight' && currentIndex < tabButtons.length - 1) {
        tabButtons[currentIndex + 1].click();
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        tabButtons[currentIndex - 1].click();
    }
});

// Add focus management for accessibility
document.addEventListener('DOMContentLoaded', function() {
    const interactiveElements = document.querySelectorAll('button, a, .collapsible-btn');
    
    interactiveElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--accent-primary)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
});

// Progress indicator for long pages
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: var(--ntu-crimson);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
});

// Add expand all / collapse all functionality for collapsibles
document.addEventListener('DOMContentLoaded', function() {
    // This function can be called to expand or collapse all sections in a card
    window.toggleAllCollapsibles = function(expand = true) {
        const collapsibleButtons = document.querySelectorAll('.collapsible-btn');
        const collapsibleContents = document.querySelectorAll('.collapsible-content');
        
        collapsibleButtons.forEach((button, index) => {
            const content = collapsibleContents[index];
            
            if (expand) {
                button.classList.add('active');
                content.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                button.classList.remove('active');
                content.classList.remove('active');
                content.style.maxHeight = '0';
            }
        });
    };
});

// Modal Content Data
const modalContent = {
    'file-support': {
        title: '📁 File Support',
        content: `
            <p>Great Expectations provides robust support for validating data in various file formats, making it ideal for testing data before it enters your data warehouse or lake. This file-first approach allows you to catch data quality issues at the source, preventing bad data from propagating through your pipeline. By validating files during ingestion, you can ensure data integrity from the very beginning of your data journey.</p>
            
            <h3>Supported File Formats</h3>
            <ul>
                <li><strong>CSV Files:</strong> Most common format for structured data transfer, with support for custom delimiters and encoding</li>
                <li><strong>Excel Files:</strong> .xlsx and .xls formats with multi-sheet support</li>
                <li><strong>JSON Files:</strong> Nested and flat JSON structures with schema validation</li>
                <li><strong>Parquet Files:</strong> Columnar storage format for big data with efficient compression</li>
                <li><strong>Avro Files:</strong> Row-based storage with schema evolution and strong typing</li>
            </ul>
            
            <div class="highlight-box">
                <p>💡 File validation is typically performed during the data ingestion phase, before data is loaded into your warehouse.</p>
            </div>
            
            <h3>Common Use Cases</h3>
            <div class="use-cases">
                <h4>Validating CSV Uploads</h4>
                <p>Check that uploaded CSV files have the expected columns, data types, and value ranges before processing.</p>
                
                <h4>Data Lake Validation</h4>
                <p>Ensure files landing in S3, Azure Blob, or Google Cloud Storage meet quality standards.</p>
                
                <h4>ETL Pipeline Quality Gates</h4>
                <p>Add validation checkpoints in your ETL workflows to catch data issues early.</p>
            </div>
            
            <h3>📖 Documentation</h3>
            <ul>
                <li><a href="https://docs.greatexpectations.io/docs/core/connect_to_data/filesystem_data/" target="_blank">Connecting to Filesystem Data</a></li>
                <li><a href="https://docs.greatexpectations.io/docs/core/connect_to_data/" target="_blank">Connect to Data Overview</a></li>
            </ul>
        `
    },
    'database-support': {
        title: '🗄️ Database Support',
        content: `
            <p>Great Expectations can connect directly to databases to validate data quality, making it perfect for testing data already in your data warehouse or operational databases. Database-level validation allows you to run tests directly where your data lives, eliminating the need for data extraction and reducing processing overhead. This approach is particularly powerful for continuous monitoring of production databases and real-time data quality checks.</p>
            
            <h3>Supported Databases</h3>
            <ul>
                <li><strong>PostgreSQL:</strong> Popular open-source relational database with advanced features</li>
                <li><strong>MySQL:</strong> Widely-used database for web applications with high performance</li>
                <li><strong>BigQuery:</strong> Google's serverless data warehouse with petabyte-scale capabilities</li>
                <li><strong>Snowflake:</strong> Cloud-based data warehouse platform with automatic scaling</li>
                <li><strong>Redshift:</strong> Amazon's data warehouse solution optimized for analytics</li>
                <li><strong>SQL Server:</strong> Microsoft's enterprise database with comprehensive tooling</li>
                <li><strong>SQLite:</strong> Lightweight embedded database perfect for local development</li>
            </ul>
            
            <div class="highlight-box">
                <p>💡 Database validation allows you to test data quality directly at the source without moving data.</p>
            </div>
            
            <h3>Key Benefits</h3>
            <div class="use-cases">
                <h4>In-Place Validation</h4>
                <p>Test data quality without extracting it from your database, reducing data movement and processing time.</p>
                
                <h4>Real-Time Monitoring</h4>
                <p>Set up scheduled validations to continuously monitor data quality in production databases.</p>
                
                <h4>SQL-Based Testing</h4>
                <p>Leverage the power of SQL for complex validation rules while maintaining Python-based orchestration.</p>
            </div>
            
            <h3>📖 Documentation</h3>
            <ul>
                <li><a href="https://docs.greatexpectations.io/docs/core/connect_to_data/sql_data/" target="_blank">Connecting to SQL Data</a></li>
                <li><a href="https://docs.greatexpectations.io/docs/home/" target="_blank">Great Expectations Home</a></li>
            </ul>
        `
    },
    'data-lakes': {
        title: '🏞️ Data Lakes',
        content: `
            <p>Great Expectations seamlessly integrates with major cloud data lake providers, enabling large-scale data validation across distributed storage systems. Data lake validation is essential for maintaining quality in environments where massive volumes of raw, semi-structured, and unstructured data are stored. By implementing validation at the data lake level, you can ensure consistent data quality across all downstream analytics and machine learning workflows.</p>
            
            <h3>Supported Platforms</h3>
            <ul>
                <li><strong>Amazon S3:</strong> Scalable object storage for data lakes with 99.999999999% durability</li>
                <li><strong>Azure Blob Storage:</strong> Microsoft's cloud storage solution with tiered pricing</li>
                <li><strong>Google Cloud Storage:</strong> Unified object storage for developers with global reach</li>
                <li><strong>Azure Data Lake Storage:</strong> Enterprise-grade data lake for analytics with Hadoop compatibility</li>
                <li><strong>Databricks File System (DBFS):</strong> Integrated with Spark workloads for distributed processing</li>
            </ul>
            
            <div class="highlight-box">
                <p>💡 Data lake validation is crucial for ensuring data quality in large-scale, distributed data environments.</p>
            </div>
            
            <h3>Why Validate Data Lakes?</h3>
            <div class="use-cases">
                <h4>Scale Validation</h4>
                <p>Test petabytes of data stored across distributed systems with efficient sampling strategies.</p>
                
                <h4>Schema Evolution</h4>
                <p>Track and validate schema changes as new data is continuously added to your data lake.</p>
                
                <h4>Multi-Format Support</h4>
                <p>Validate data across different formats (Parquet, ORC, Avro) stored in the same data lake.</p>
                
                <h4>Partition Validation</h4>
                <p>Test data quality at the partition level for efficient processing of time-series or categorical data.</p>
            </div>
            
            <h3>📖 Documentation</h3>
            <ul>
                <li><a href="https://docs.greatexpectations.io/docs/cloud/overview/gx_cloud_overview" target="_blank">Connecting to Cloud Storage</a></li>
                <li><a href="https://docs.greatexpectations.io/docs/core/introduction/gx_overview/" target="_blank">GX Overview</a></li>
            </ul>
        `
    },
    'builtin-tests': {
        title: '✅ Built-in Tests',
        content: `
            <p>DBT provides four fundamental built-in tests that cover the most common data quality checks. These tests are simple to implement and powerful for catching data issues. The beauty of DBT's built-in tests lies in their simplicity and SQL-native execution, making them incredibly fast and easy to understand. These tests run directly in your data warehouse, leveraging the power of modern SQL engines for optimal performance.</p>
            
            <h3>The Four Built-in Tests</h3>
            <ul>
                <li><strong>unique:</strong> Ensures all values in a column are unique (no duplicates), essential for primary keys</li>
                <li><strong>not_null:</strong> Confirms there are no NULL values in critical columns, preventing data gaps</li>
                <li><strong>accepted_values:</strong> Validates that column values match a predefined list, catching invalid categories</li>
                <li><strong>relationships:</strong> Verifies referential integrity (foreign key constraints), ensuring data consistency across tables</li>
            </ul>
            
            <div class="highlight-box">
                <p>💡 These tests run as SQL queries against your data warehouse, making them very performant.</p>
            </div>
            
            <h3>Example Usage</h3>
            <div class="use-cases">
                <h4>Unique Test</h4>
                <p>Ensure customer IDs or order numbers are unique: <code>tests: [unique]</code></p>
                
                <h4>Not Null Test</h4>
                <p>Verify critical fields like email or payment amount are always present: <code>tests: [not_null]</code></p>
                
                <h4>Accepted Values</h4>
                <p>Check status fields contain only valid values: <code>accepted_values: {values: ['active', 'inactive', 'pending']}</code></p>
                
                <h4>Relationships</h4>
                <p>Validate that order.customer_id exists in customers.id: <code>relationships: {to: ref('customers'), field: id}</code></p>
            </div>
            
            <h3>📖 Documentation</h3>
            <ul>
                <li><a href="https://docs.getdbt.com/docs/build/data-tests" target="_blank">DBT Data Tests</a></li>
                <li><a href="https://docs.getdbt.com/reference/resource-properties/data-tests" target="_blank">Test Properties Reference</a></li>
            </ul>
        `
    },
    'dbt-utils': {
        title: '🔧 dbt_utils',
        content: `
            <p>dbt_utils is a popular package maintained by dbt Labs that extends DBT's testing capabilities with dozens of additional tests and helper functions. This community-driven package has become an essential tool for data teams, providing battle-tested utilities that handle common data quality scenarios. With over 50+ macros and tests, dbt_utils bridges the gap between basic built-in tests and custom test development.</p>
            
            <h3>Popular dbt_utils Tests</h3>
            <ul>
                <li><strong>accepted_range:</strong> Verify numeric or date values fall within a range, with optional inclusive/exclusive boundaries</li>
                <li><strong>expression_is_true:</strong> Test complex business logic across columns using SQL expressions</li>
                <li><strong>recency:</strong> Ensure data is fresh and recently updated, critical for monitoring data pipelines</li>
                <li><strong>at_least_one:</strong> Check that at least one value in a column is not null, useful for sparse data</li>
                <li><strong>cardinality_equality:</strong> Compare distinct counts across tables to ensure consistency</li>
                <li><strong>unique_combination_of_columns:</strong> Test uniqueness across multiple columns for composite keys</li>
            </ul>
            
            <div class="highlight-box">
                <p>💡 Install with: <code>dbt deps</code> after adding to packages.yml</p>
            </div>
            
            <h3>When to Use dbt_utils</h3>
            <div class="use-cases">
                <h4>Range Validation</h4>
                <p>Perfect for validating date ranges, age limits, or price boundaries that change over time.</p>
                
                <h4>Business Logic Testing</h4>
                <p>Test complex calculations, such as ensuring discounted_price <= original_price.</p>
                
                <h4>Data Freshness</h4>
                <p>Alert when your most recent data is older than expected, indicating potential pipeline issues.</p>
                
                <h4>Composite Keys</h4>
                <p>Validate uniqueness across multiple columns when no single column is unique.</p>
            </div>
            
            <h3>📖 Documentation</h3>
            <ul>
                <li><a href="https://hub.getdbt.com/dbt-labs/dbt_utils/latest/" target="_blank">dbt_utils Package Hub</a></li>
                <li><a href="https://docs.getdbt.com/docs/build/data-tests" target="_blank">DBT Data Tests</a></li>
            </ul>
        `
    },
    'dbt-expectations': {
        title: '🎯 dbt-expectations',
        content: `
            <p>dbt-expectations is a powerful testing package inspired by Great Expectations, bringing statistical and advanced data quality tests to DBT. This package represents the most comprehensive testing library available for DBT, with over 50 different test types covering everything from basic schema validation to complex statistical analysis. It's particularly valuable for data science teams who need rigorous data quality checks before model training.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Type Validation:</strong> Verify column data types match expectations, catching schema drift before it causes issues</li>
                <li><strong>String Pattern Matching:</strong> Use regex to validate formats (emails, phone numbers), ensuring data conforms to standards</li>
                <li><strong>Statistical Tests:</strong> Mean, median, standard deviation validations to detect data anomalies</li>
                <li><strong>Set Operations:</strong> Test if values are subsets or supersets of expected lists, useful for category validation</li>
                <li><strong>JSON Validation:</strong> Validate JSON column schemas and structures for semi-structured data</li>
                <li><strong>Time Series Tests:</strong> Detect anomalies and trends in time-based data using statistical methods</li>
            </ul>
            
            <div class="highlight-box">
                <p>💡 dbt-expectations provides over 50 tests, making it one of the most comprehensive testing packages for DBT.</p>
            </div>
            
            <h3>Advanced Use Cases</h3>
            <div class="use-cases">
                <h4>Schema Enforcement</h4>
                <p>Catch schema drift by validating that columns maintain expected data types across pipeline runs.</p>
                
                <h4>Format Validation</h4>
                <p>Use regex patterns to ensure emails, URLs, phone numbers follow the correct format.</p>
                
                <h4>Statistical Monitoring</h4>
                <p>Detect anomalies by testing if metrics fall outside expected statistical ranges.</p>
                
                <h4>Data Distribution</h4>
                <p>Validate that categorical variables maintain expected distributions (e.g., geographic regions).</p>
            </div>
            
            <h3>📖 Documentation</h3>
            <ul>
                <li><a href="https://hub.getdbt.com/calogica/dbt_expectations/latest/" target="_blank">dbt-expectations Package Hub</a></li>
                <li><a href="https://docs.getdbt.com/docs/build/data-tests" target="_blank">DBT Data Tests</a></li>
            </ul>
        `
    }
};

// Modal Functions
function initializeModal() {
    const modal = document.getElementById('modal-overlay');
    const modalContentEl = document.getElementById('modal-content');
    const closeBtn = document.querySelector('.modal-close');
    const featureButtons = document.querySelectorAll('.feature-btn');
    
    // Open modal when feature button is clicked
    featureButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const content = modalContent[modalId];
            
            if (content) {
                modalContentEl.innerHTML = `
                    <h2>${content.title}</h2>
                    ${content.content}
                `;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });
    
    // Close modal when close button is clicked
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the modal container
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Initialize modal on page load
document.addEventListener('DOMContentLoaded', initializeModal);

// Console message for developers
console.log('%c🔍 Data Testing Guide', 'font-size: 20px; font-weight: bold; color: #7b68ee;');
console.log('%cExplore Great Expectations & DBT Testing!', 'font-size: 14px; color: #5a6c7d;');
console.log('%cTip: Use arrow keys to navigate between tabs!', 'font-size: 12px; color: #5fcc8f;');
console.log('%cClick on the buttons in the screenshots to learn more!', 'font-size: 12px; color: #2563eb;');
